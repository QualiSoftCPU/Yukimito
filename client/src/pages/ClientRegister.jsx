import React from 'react'
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import cartoonDogs from "../assets/images/cartoonDogs.jpeg";
import { Grid } from "@mui/material";
import { amber } from "@mui/material/colors";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

const LilitaOne = "'Lilita One', cursive";

const ClientRegister = () => {

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

    const signInStyle = {
        paddingLeft: '0',
        paddingRight: '0',
    };  

    const formStyle = {
    minWidth: 275, 
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingRight: '3rem',
    paddingLeft: '3rem',
    backgroundColor: '#ededed'
    }

    return (
    <Container maxWidth='xl' className='navBar-container'>
        <Toolbar disableGutters>
            <CustomBox>
            {/*comment here*/}
                <Grid>
                    <CustomBox sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Title variant="h1" sx={{ fontSize: "100px", color: '#F5CF00' }}>
                                YUKIMITO
                            </Title>
                    </CustomBox>
                    <CustomBox sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img
                                src={cartoonDogs}
                                alt="cartoon dog"
                                style={{ width: "100%", maxWidth: "70%" }}
                            />
                    </CustomBox>
                </Grid>
                <Grid align="center" >
                    <CustomBox sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Card sx={formStyle}>
                            <Title
                                variant="h1"
                                sx={{ fontSize: "70px", color: '#F5CF00'}}
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
                                <Button className='button-color' type="submit" variant="contained">
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
                                    <Button style={signInStyle} className='button-link' type="submit" variant="text">
                                        Sign in
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                    </CustomBox>
                </Grid>
        </CustomBox>
        </Toolbar>
    </Container>
    );
};
export default ClientRegister