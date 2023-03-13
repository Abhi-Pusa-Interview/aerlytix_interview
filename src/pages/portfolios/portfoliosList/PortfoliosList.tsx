import React from "react";
import BasicModal from "../../../component/Modal/Modal";
import AddIcon from '@mui/icons-material/Add';
import {Button, Box, Grid} from "@mui/material";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import CreatePortfolios from "../createPortfolio/CreatePortfolio";
import {useModal} from "../../../hooks/useModal";
import {PortfolioProps} from "../../../interfaces/portfolioProps";
import {usePortfolioListHooks} from "../../../hooks/usePortfolioListHooks";

const style = {
    position: 'fixed',
    right: "40px",
    bottom: "40px",
    height: "60px",
    borderRadius: "50%"
  };

const PortfoliosList = () => {
    const {open,handleOpen,handleClose} = useModal();
    const {portfolioList,removePortfolio,addPortfolio} = usePortfolioListHooks();
    
    return (<Box sx={{margin: "20px"}}>
         <Box >
            <Grid sx={{width: "100%"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {portfolioList.map((p:PortfolioProps) => {
                    return(<Grid item xs={6} key={p.id}>
                        <PortfolioItem {...p} removeHandler={removePortfolio}/>
                    </Grid>)
                })}
            </Grid>
        </Box>
        <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose}>
            <CreatePortfolios handleClose={handleClose} portfolioList={portfolioList} addPortfolio={addPortfolio}/>
        </BasicModal>
        <Button sx={style} variant="contained" onClick={() => handleOpen()}>
            <AddIcon />
        </Button>
    </Box>)
}

export default PortfoliosList;