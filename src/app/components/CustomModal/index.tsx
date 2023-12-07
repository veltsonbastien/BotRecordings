'use client'
import {ReactNode} from "react";
import Modal from "react-modal"
import { modalStyles } from "./modalstyle"

export type ModalProps = {
    open: boolean;
    setOpen: (b: boolean) => void;
}

type CustomModalProps = {
    children: ReactNode | ReactNode[];
} & ModalProps

//a custom modal component to help with modal ui
export default function Index(props: CustomModalProps){
    const {open, setOpen, children} = props;
    return(
        <Modal
            isOpen={open}
            style={modalStyles}
            ariaHideApp={false}
        >
            <div style={{display: "inline-flex", flexDirection: "column"}}>
                <button style={{position: "absolute", top: "10px", left: "20px", fontWeight: "bold", fontSize: "35px"}} onClick={()=>setOpen(false)}> <span>&times;</span> </button>
                  {children}
            </div>
        </Modal>
    );
}