import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { amber, grey } from "@mui/material/colors";



const amberColor = amber[600];
const greyColor = grey[300];
const LilitaOne = "'Lilita One', cursive";

const ClientLogin = () => {
  const paperStyle = {
    padding: 40,
    height: "70vh",
    width: 550,
    backgroundColor: greyColor,
    
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(8),
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

    fontFamily: LilitaOne,

    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <CustomBox>
      {/*comment here*/}

    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Title variant="h1" sx={{ fontSize: "100px", color: amberColor }}>
            YUKIMITO
        </Title>
 {/*
        <img
            src={cartoonDogs}
            alt="cartoon dog"
            style={{ width: "100%", maxWidth: "60%" }}
        />
        */}
    </Box>

        <Grid align="center">
            <CustomBox sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Paper elevation={10} style={paperStyle}>
                    <Title
                        variant="h1"
                        sx={{ fontSize: "70px", color: amberColor}}
                    >
                        Welcome
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
                        Log in to Yukimito!
                    </Typography>

                    <Box mb={3}>
                        <TextField
                            variant="outlined"
                            label="Username"
                            placeholder="Enter Username"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            variant="outlined"
                            label="Password"
                            type="password"
                            placeholder="Enter Username"
                            fullWidth
                            required
                        />
                    </Box>
                    <Button type="submit" variant="contained">
                        Log in
                    </Button>
                    <Button type="submit" variant="text">
                        Create an account
                    </Button>
                </Paper>
            </CustomBox>
        </Grid>
    </CustomBox>
  );
};

export default ClientLogin;
