'use client'

import {useState} from "react"
import CreateBotLayout from "./CreateBotLayout";

export default function OptionButtons(){
    const [openCreate, setOpenCreate] = useState(false);

    return(
        <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: '30px 15%',}}>
                <button style={{padding: '10px', borderRadius: '5px', fontWeight: 'bold', backgroundColor: '#10496b'}} onClick={()=>setOpenCreate(true)}> Make a new bot </button>
            </div>
            <CreateBotLayout open={openCreate} setOpen={setOpenCreate} />
        </>
    );
}