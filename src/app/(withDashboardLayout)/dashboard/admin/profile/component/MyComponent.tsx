import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { Box, Button, Card, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

const MyComponent = ({ data, isLoading }: any) => {
  const [updateUser] = useUpdateUserMutation();

  const handleFormSubmit = (values: FieldValues) => {
    console.log(values);
  };

  const defaultValues = {
    email: data?.email || "",
    name: data?.name || "",
    contactNumber: data?.contactNumber || "",
    status: data?.status || "",
    role: data?.role || "",
    id: data?.id || "",
  };

  return (
    <Box>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button loading>Submit</Button>
        </Box>
      ) : (
        <PHForm
          defaultValues={data && defaultValues}
          onSubmit={handleFormSubmit}
        >
          <Card>
            <Grid container spacing={2} sx={{ p: 3 }}>
              <Grid item xs={12} sm={12} md={6}>
                <PHInput
                  name="name"
                  label="Name"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <PHInput
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <PHInput
                  name="contactNumber"
                  label="Contract Number"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <PHInput
                  name="status"
                  label="Status"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <PHInput
                  name="role"
                  label="Role"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <PHInput
                  name="id"
                  label="User Id"
                  fullWidth={true}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <Button type="submit" sx={{ margin: 1 }}>
              Update
            </Button>
          </Card>
        </PHForm>
      )}
    </Box>
  );
};

export default MyComponent;
