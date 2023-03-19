import React,{ ChangeEvent, MouseEvent } from "react";
import {Grid, TextField, Typography, MenuItem, Button, Chip} from "@mui/material";
import { aircrafts } from "../../../constants/constants";
import {PortfolioProps} from "../../../interfaces/portfolioProps";
import CloseIcon from '@mui/icons-material/Close';
import useCreatePortfolio from "../../../hooks/useCreatePortfolio";
import { CreatePortfolioProps } from "../../../interfaces/CreatePortfolioProps";


const CreatePortfolios = (props:CreatePortfolioProps) => {

    const {portfolioName,aircraftList,updatePortfolioName,addAircraft,removeAircraft} = useCreatePortfolio();

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        addAircraft(e.target.value);
    }

    const changehandler = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        updatePortfolioName(e.target.value);
    }

    const onRemoveHandler = (e:MouseEvent<HTMLButtonElement>) => {
       removeAircraft(e.currentTarget.id);
    }

    const onSubmit = () => {
        let newPortfolio:PortfolioProps = {
            id: Math.floor(Math.random()*100000)+"",
            name:portfolioName,
            aircrafts:aircraftList
        }
        props.addPortfolio(newPortfolio);
        props.handleClose();
    }

    const onCancel = () => {
        props.handleClose();
    }

    return (<Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
        alignContent:"center",justifyContent:"center", textAlign:"center", width: "100%"
    }}>
        <Grid item xs={12} sx={{width:"100%"}}>
            <Typography>Create New Portfolio</Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField inputProps={{
                    'data-testid': "text-portfolio-name",
                }} 
                sx={{width:"100%"}} 
                id="portfolio_name" 
                value={portfolioName} 
                label="Portfolio Name" 
                variant="standard" onChange={changehandler} />
        </Grid>
        <Grid item xs={12}>
            <TextField
                sx={{width:"100%", color:"black"}}
                label="Select Aircraft" 
                id="select-aircraft"
                data-testid="select-aircraft"
                select
                onChange={handleChange}
                >
                    {aircrafts.map(aircraft => {
                        return (
                            <MenuItem id={aircraft.registration} 
                                data-testid={aircraft.registration}
                                key={aircraft.registration}
                                value={aircraft.registration}>{aircraft.registration}</MenuItem>
                        )
                    })}
            </TextField>
        </Grid>
        <Grid item xs={12} sx={{textAlign:"left"}}>
            {aircraftList.map((aircraft:string) => {
                return <Chip sx={{margin:"0px 5px 5px 0px"}} data-testid="selected-aircraft-chip" key={aircraft} label={(<>{aircraft}
                <Button data-testid="selected-aircraft-btn" id={aircraft} style={{height:"16px",width:"16px",border:"0px",marginTop:"5px"}} onClick={onRemoveHandler}>
                    <CloseIcon data-testid="selected-aircraft-icon" sx={{height:"20px",width:"20px",marginTop:"-7px"}}/>
                </Button></>)} />
            })}
        </Grid>
        <Grid item xs={12} sx={{textAlign:"right"}}> 
            <Button data-testid="ok-btn" sx={{marginRight: "10px"}} variant="contained" onClick={onSubmit}>OK</Button>
            <Button data-testid="cancel-btn" variant="contained" onClick={onCancel}>Cancel</Button>
        </Grid>
    </Grid>)
}

export default CreatePortfolios;