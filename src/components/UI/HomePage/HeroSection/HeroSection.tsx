import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
// import assets from "@/assets";
import grid from "@/assets/svgs/grid.svg";
import arrow from "@/assets/svgs/arrow.svg";
import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.png";
import doctor3 from "@/assets/images/doctor3.png";
import stethoscope from "@/assets/images/Stetoscope.png";

const HeroSection = () => {
  return (
    <Container sx={{ display: "flex", direction: "row", my: 16 }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            left: "-90px",
            top: "-140px",
          }}
        >
          <Image src={grid} alt="grid" width={500} height={500} />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography variant="h6" component="p" fontWeight={400} sx={{ my: 2 }}>
          PH Healthcare offers you the convenience of accessing care from
          anywhere, saving time, and ensuring you to get the attention you need
          without the hassle of traveling to a clinic.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button variant="outlined">Contact US</Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box sx={{ position: "absolute", left: "200px", top: "-30px" }}>
          <Image src={arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image src={doctor1} alt="doctor" width={240} height={380} />
          </Box>
          <Box>
            <Image src={doctor2} alt="doctor" width={240} height={380} />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "220px", left: "160px" }}>
          <Image src={doctor3} alt="doctor" width={220} height={220} />
        </Box>
        <Box
          sx={{ position: "absolute", bottom: "-50px", right: 0, zIndex: "-1" }}
        >
          <Image src={stethoscope} alt="stethoscope" width={180} height={180} />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
