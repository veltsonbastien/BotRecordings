'use client'

import Image from 'next/image'
import Link from 'next/link'

export type BotComponentProps = {
    id: string,
    meeting_title: string,
    date: string,
    platform: string,
}

// render a bot component info card for BotsLayout- pass in information from each bot in listBots()
export default function BotComponent (props: BotComponentProps) {
    const {id, meeting_title, date, platform} = props;
    let formatted_date = date.substring(0, 10);
    let thumbnail:any = platform === "zoom" ? {file: "/zoom.svg", alt: "Zoom logo"} : {file: "/googlemeet.svg", alt: "Google Meet logo"}

    return (
        <div className="rounded-lg border-2 border-white p-5 my-5">
          <Image
            src={thumbnail.file}
            width={50}
            height={50}
            alt={thumbnail.alt}
            className="absolute"
          />
          <h2 className="font-bold">{meeting_title}</h2>
          <p className="text-xs"> {id} </p>
          <p className="mY-10 mb-5"> {formatted_date}</p>
          <Link href={`bot/${id}`} style={{padding: '5px 7px', borderRadius: '5px', fontWeight: 'bold', backgroundColor: '#2083bf', fontSize: '13px'}}> View Recording </Link>
        </div>
    );
}