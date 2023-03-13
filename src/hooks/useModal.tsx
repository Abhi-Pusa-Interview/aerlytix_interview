import {useState} from "react";

// custom hook for using modal
export function useModal(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return {open,handleOpen,handleClose};
}