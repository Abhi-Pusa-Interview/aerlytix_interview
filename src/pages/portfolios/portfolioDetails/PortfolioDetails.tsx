import React from "react";
import {Grid, Typography, Paper, Chip, Avatar} from "@mui/material";
import { useLocation} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Dashboard from '../../dashboard/Dashboard';
import PortfolioItemHOC from "./PortfolioItemHOC";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    lineHeight: '60px',
    margin: "100px"
}));

const PortfolioDetails = () => {
    const { state } = useLocation();
    
    return (<Item>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={3} sx={{width:"100%"}}>
                <Avatar
                    sx={{ height:"150px",width:"150px", margin:"20px 10px 10px 10px", marginLeft: "calc(100% - 200px)" }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    {state.name.charAt(0).toUpperCase()}
                </Avatar>
            </Grid>    
            <Grid item xs={9} sx={{width:"100%"}}>
                <PortfolioItemHOC label="Porfolio ID:">
                    <Typography>{state.id}</Typography>
                </PortfolioItemHOC>

                <PortfolioItemHOC label="Portfolio Name:">
                    <Typography>{state.name}</Typography>
                </PortfolioItemHOC>

                <PortfolioItemHOC label="Portfolio Aircrafts:">
                    {state.aircrafts.map((aircraft:string) => {
                        return (<Chip sx={{margin:"0px 5px 5px 0px",marginTop:"-30px"}} key={aircraft} label={aircraft} />)
                    })}
                </PortfolioItemHOC>
            </Grid> 
            <Dashboard {...state} />
        </Grid>
    </Item>)
}

export default PortfolioDetails;