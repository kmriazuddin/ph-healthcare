"use client";

import { useGetSingleUserQuery } from "@/redux/api/userApi";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import MyComponent from "./component/MyComponent";

const MyProfile = () => {
  const { data, isLoading } = useGetSingleUserQuery({});
  return (
    <Box>
      <Typography variant="h5" my={5}>
        My Profile
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <Box sx={{ display: "flex", justifyContent: "center", margin: 0 }}>
              <Avatar
                src={data?.profilePhoto}
                alt="logo"
                sx={{
                  width: 180,
                  height: 180,
                }}
              />
            </Box>
            <CardContent sx={{ textAlign: "start" }}>
              <Typography gutterBottom variant="h5" component="div">
                Name: {data?.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Designation: {data?.role}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", margin: 0 }}
            >
              <Button size="small" color="success">
                Update Profile
              </Button>
              <Button size="small" color="error" variant="outlined">
                Sign Out
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <MyComponent data={data} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyProfile;
