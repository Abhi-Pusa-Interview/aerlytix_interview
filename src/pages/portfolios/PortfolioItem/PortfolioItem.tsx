import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";
import { Button, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

interface PortfolioProps {
    name:string,
    id:string,
    aircrafts:Array<string>,
    removeHandler:Function
}

const PortfolioItem = (props:PortfolioProps) => {
    let navigate = useNavigate();

    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        props.removeHandler(e.currentTarget.id);
        e.stopPropagation();
    }

    let newProp = {id:props.id,name:props.name,aircrafts:props.aircrafts};

    return(<Item key={props.id} onClick={() => navigate(`${props.id}`,{ state: newProp })} sx={{position:"relative",cursor:"pointer"}}>
        <Typography>{props.name}</Typography>
        <Button id={props.id} onClick={clickHandler} sx={{right:"0px", top:"3px",position:"absolute", textAlign:"right"}}> 
            <CloseIcon />
        </Button>
    </Item>)
}

export default PortfolioItem;