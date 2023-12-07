import Link from 'next/link'
import {retrieveBot, getBotTranscript} from "@/app/actions";

export default async function Page({ params }: { params: { id: string } }){
   const id = params.id;

   const get_bot = JSON.parse((await retrieveBot(id))?.message);
   const title = get_bot?.meeting_metadata?.title;
   const video_url = get_bot?.video_url;
   const participants = get_bot?.meeting_participants;
   const participant_names:string[] = []
   const platform = get_bot?.meeting_url.platform;

   participants.forEach((participant: any) => {
     participant_names.push(participant.name);
   });

   //transcripts currently not working, but still included in case they come through later
   const get_transcript_req = await getBotTranscript(id);
   const get_transcript = JSON.parse(get_transcript_req.message);


   return(
       <div style={{display: "inline-flex", flexDirection: "column"}}>
         <h1 className="text-3xl text-center font-bold m-10"> Bot Recording: {title || "Unable to load title"} </h1>
         <p className="text-center mb-10">{id}</p>
           {
               video_url ?
                   <video autoPlay loop controls>
                     <source src={video_url} />
                   </video> :
                   <div style={{display: "inline-flex", alignSelf: "center", flexDirection: "column" }}>
                       <p className="text-center"> Media has expired for this bot. Try creating another one! </p>
                       <Link href="/" style={{textAlign: "center", marginTop: "10px", padding: '5px 7px', borderRadius: '5px', fontWeight: 'bold', backgroundColor: '#2083bf', fontSize: '13px'}}> Back </Link>
                   </div>
           }

           <h2 className="text-2xl my-12" > Meeting Summary: </h2>
           <p> Platform: { platform } </p>
           <p> Participants: { participant_names.join(",")}</p>

           <h2 className="text-2xl my-12" > Chat Transcript: </h2>
           {get_transcript}

       </div>
   );
}