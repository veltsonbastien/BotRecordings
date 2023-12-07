'use client'

import CustomModal, {ModalProps} from "./CustomModal";
import { useFormState, useFormStatus } from 'react-dom'
import {createBot} from "../actions";


const initialState = {
    message: '',
}
function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" aria-disabled={pending} style={{padding: '3px', borderRadius: '5px', fontWeight: 'bold', backgroundColor: '#2083bf', margin: '15px 0px'}}>
        Create
        </button>
    )
}

//implements a CustomModal to allow a user to create a layout of BotComponents
export default function CreateBotLayout(props: ModalProps){
    const {open, setOpen} = props;

    const [state, formAction] = useFormState(createBot, initialState)

    return(
        <CustomModal open={open} setOpen={setOpen}>
            <form action={formAction} style={{display: "inline-flex", flexDirection: "column"}}>
                    <button style={{position: "absolute", top: "10px", left: "20px", fontWeight: "bold", fontSize: "35px"}} onClick={()=>setOpen(false)}> <span>&times;</span> </button>
                    <h2 className="text-3xl pb-10 text-center"> Create a bot to add to your meeting! </h2>
                    <label htmlFor="create-bot" className="block text-sm font-medium leading-6">Meeting URL:</label>
                    <input className="text-black" type="text" name="meeting-url" id="meeting-url" required />
                    <label htmlFor="create-bot" className="block text-sm font-medium leading-6" placeholder="My Bot">Give the bot a name:</label>
                    <input className="text-black" type="text" name="bot-name" id="bot-name" />
                    <SubmitButton />
                    <p aria-live="polite"> {state?.message} </p>
            </form>
        </CustomModal>
    );
}