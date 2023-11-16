import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import cartoonDogs from "../assets/cartoonDogs.jpeg";
import { amber } from "@mui/material/colors";

const amberColor = amber[600];
const LilitaOne = "'Lilita One', cursive";
const AdminDashBoard = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "90px",
    color: "#000336",
    fontWeight: "bold",
    fontFamily: LilitaOne,
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <Box sx={{ backgroundColor: "white", minHeight: "80vh" }}>
      <Container>
        <AdminNavbar />
        <Title variant="h1" sx={{ fontSize: "100px" }}>
          YUKIMITO
        </Title>
        <Typography
          variant="body2"
          sx={{
            fontSize: "20px",
            color: "#5A6473",
            fontWeight: "1000",
            my: 2,
          }}
        >
          Iloilo Pet Hotel and Boarding Services
        </Typography>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            {/* 
            <Typography
              variant="body2"
              sx={{
                fontSize: "23px",
                color: "#687690",
                fontWeight: "500",
                mt: 1,
                mb: 4,
                
              }}>
              
              The ultimate "paw"ty experience
            </Typography>
            */}
            <Title variant="h1" sx={{ fontSize: "100px", color: amberColor }}>
              YUKIMITO
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "20px",
                color: "#5A6473",
                fontWeight: "1000",
                my: 2,
              }}
            >
              Iloilo Pet Hotel and Boarding Services
            </Typography>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={cartoonDogs}
              alt="cartoon dog"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default AdminDashBoard;
