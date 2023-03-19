import React from "react";
import {Grid, Typography} from "@mui/material";
import {PortfolioItemHOCProps} from "../../../interfaces/PortfolioItemHOCProps";

const PortfolioItemHOC = (props:PortfolioItemHOCProps) => {
    return (
        <Grid data-testid="grid-container" sx={{margin: "20px"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid data-testid="grid-item" item xs={4} sx={{textAlign:"left"}}>
                <Typography style={{fontWeight:"600"}}>{props.label}</Typography>
            </Grid>
            <Grid data-testid="grid-item" item xs={8} sx={{textAlign:"left", marginTop:"0px"}}>
                {props.children}
            </Grid>
        </Grid>
    )
}

export default PortfolioItemHOC;