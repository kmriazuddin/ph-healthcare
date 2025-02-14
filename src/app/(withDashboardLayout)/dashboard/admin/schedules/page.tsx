"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import ScheduleModal from "./components/ScheduleModal";
import {
  useDeleteScheduleMutation,
  useGetAllSchedulesQuery,
} from "@/redux/api/scheduleApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dateFormatter } from "@/utils/dateFormatter";
import { ISchedule } from "@/types/schedule";
import dayjs from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "sonner";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllSchedulesQuery({});

  const [deleteSchedule] = useDeleteScheduleMutation();

  const schedules = data?.schedule;
  const meta = data?.meta;

  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule) => {
      return {
        id: schedule?.id,
        startDate: dateFormatter(schedule.startDate),
        endDate: dateFormatter(schedule.endDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSchedule(id);
      console.log(res);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "endDate", headerName: "End Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon sx={{}} />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>
          Create New Schedules
        </Button>
        <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Schedule" />
      </Stack>
      <Box my={5}>Display Schedule</Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button loading></Button>
        </Box>
      )}
    </Box>
  );
};

export default SchedulesPage;
