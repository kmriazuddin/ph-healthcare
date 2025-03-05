"use client";

import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import DoctorInformations from "./components/DoctorInformations";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useState } from "react";
import ProfileUpdateModal from "./components/ProfileUpdateModal";
import EditIcon from "@mui/icons-material/Edit";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "45%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const MyProfile = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fileUploadHandler = async (file: File) => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateUser(formData);
  };

  if (isLoading) {
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button loading>Submit</Button>
    </Box>;
  }
  return (
    <>
      <ProfileUpdateModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
            <Box
              sx={{
                width: "100%",
                height: 300,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <Image
                src={data?.profilePhoto}
                alt={data?.name}
                width={400}
                height={300}
              />
            </Box>

            {updateLoading ? (
              <p>Uploading...</p>
            ) : (
              <AutoFileUploader
                name="file"
                label="Choose Your Photo"
                icon={<UploadFileIcon />}
                onFileUpload={fileUploadHandler}
                variant="text"
              />
            )}

            <Button
              fullWidth
              endIcon={<EditIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid xs={12} md={8}>
            <DoctorInformations data={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MyProfile;
