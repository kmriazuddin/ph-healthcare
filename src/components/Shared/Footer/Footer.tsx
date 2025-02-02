import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import facebookIcon from "@/assets/landing_page/facebook.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff">Consultation</Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
        <Stack direction="row" gap={4} justifyContent={"center"} py={3}>
          <Image src={facebookIcon} alt="Facebook" width={30} height={30} />
          <Image src={linkedinIcon} alt="Linkedin" width={30} height={30} />
          <Image src={twitterIcon} alt="Twitter" width={30} height={30} />
          <Image src={instagramIcon} alt="Instagram" width={30} height={30} />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          gap={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2025 PH Healthcare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Healthcare
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
