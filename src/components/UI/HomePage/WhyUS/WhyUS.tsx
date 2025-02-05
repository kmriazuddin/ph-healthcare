import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "@/assets";
import chooseUs from "@/assets/choose-us.png";
import Image from "next/image";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "People under healthcare, easier, at everyone's fingertips, we are able to reach everyone. So I was able to come to this place with your prayers.",
  },
  {
    imageSrc: assets.svgs.care,
    title: "Best Quality Pregnancy Care",
    description:
      "Our doctors try to quickly solve any problem related to women's health including pregnancy so that there is no problem.",
  },
  {
    imageSrc: assets.svgs.equipment,
    title: "Complete Medical Equipments",
    description:
      "Buy Medicines online from home, Authentic medicines with discounts & free home delivery within Dhaka city.",
  },
  {
    imageSrc: assets.svgs.call,
    title: "Dedicated Emergency Care",
    description:
      "Making healthcare easily accessible anytime, anywhere. Get report at PH Healthcare app within 24 hours.",
  },
];

const WhyUS = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5} alignItems="center">
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[0].imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                margin: "10px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[1].imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[2].imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[3].imageSrc} alt="award" width={50} />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.body1"
                  fontWeight={300}
                >
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ display: "flex" }}>
            <Box sx={{ margin: "0 auto", justifyContent: "center" }}>
              <Image src={chooseUs} alt="choose us" width={400} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUS;
