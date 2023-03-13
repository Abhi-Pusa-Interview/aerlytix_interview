import React from "react";
import {Grid, Typography} from "@mui/material";
import {PortfolioItemHOCProps} from "../../../interfaces/PortfolioItemHOCProps";

const PortfolioItemHOC = (props:PortfolioItemHOCProps) => {
    return (
        <Grid sx={{margin: "20px"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4} sx={{textAlign:"left"}}>
                <Typography style={{fontWeight:"600"}}>{props.label}</Typography>
            </Grid>
            <Grid item xs={8} sx={{textAlign:"left", marginTop:"0px"}}>
                {props.children}
            </Grid>
        </Grid>
    )
}

export default PortfolioItemHOC;