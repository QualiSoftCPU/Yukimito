import React from 'react'
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import cartoonDogs from "../assets/cartoonDogs.jpeg";
import { Grid } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

const amberColor = amber[600];
const greyColor = grey[300];
const LilitaOne = "'Lilita One', cursive";

const ClientRegister = () => {
    const paperStyle = {
        padding: 40,
        height: "70vh",
        
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
    <Grid>
        <CustomBox sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
           
            <Title variant="h1" sx={{ fontSize: "100px", color: amberColor }}>
                YUKIMITO
            </Title>
      </CustomBox>
      <CustomBox sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
                src={cartoonDogs}
                alt="cartoon dog"
                style={{ width: "100%", maxWidth: "80%" }}
            />
           </CustomBox>
        
     </Grid>
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
                            Register to Yukimito!
                        </Typography>
    
                        <Box mb={1}>
                            <TextField
                                className='input-white-bg'
                                variant="outlined"
                                label="Pet Owner's Name"
                                placeholder="Enter Name"
                                fullWidth
                                required
                            />
                        </Box>
                        <Box mb={1}>
                            <TextField
                            className='input-white-bg'
                                variant="outlined"
                                label="Contact Number"
                                placeholder="Enter Contact Number"
                                fullWidth
                                required
                            />
                        </Box>
                        <Box mb={1}>
                            <TextField
                            className='input-white-bg'
                                variant="outlined"
                                label="Username"
                                placeholder="Enter Username"
                                fullWidth
                                required
                            />
                        </Box>
                        <Box mb={1}>
                            <TextField
                            className='input-white-bg'
                                variant="outlined"
                                label="Password"
                                type="password"
                                placeholder="Enter Password"
                                fullWidth
                                required
                            />
                        </Box>
                        <Box mb={1}>
                            <TextField
                            className='input-white-bg'
                                variant="outlined"
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm Password"
                                fullWidth
                                required
                            />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Button type="submit" variant="contained">
                                Register
                            </Button>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: "15px",
                                        color: "#5A6473",
                                        fontWeight: "1000",
                                        my: 2,
                                    }}
                                >
                                    Already have an account?
                                </Typography>
                                <Button type="submit" variant="text">
                                    Sign in
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </CustomBox>
            </Grid>
        </CustomBox>
      );
    };
export default ClientRegister