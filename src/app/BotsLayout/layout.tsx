import BotComponent from "../components/BotComponent";

//async listBots is called in the layout to conform with NextJS 14 app router reqs (this is a Server component)
async function listBots() {
    const url = process.env.API_URL;
    if(!url) return;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.API_TOKEN || ""
        }
    };

    const res = await fetch(url, options);
    if(!res.ok) console.error("error in listBots() async function");

    return res.json();
}

export default async function BotsLayout(){
    const bots_call = await listBots();
    const bots = await bots_call.results;

    return(
        <>
            <h2 className="text-xl my-10"> My bots: </h2>
            {bots ? bots.map((bot:any)=>{
                // look for the presence of meeting_metadata as a potential way to see if bot already joined
                // bots that don't have this have not joined yet, OR have- but the metadata expired
                const metadata = bot.meeting_metadata;
                const platform = bot.meeting_url.platform;
                const formattedPlatform = platform[0].toUpperCase().concat(platform.substring(1));
                return (
                    metadata ?
                        <BotComponent key={bot.id} id={bot.id} meeting_title={bot.meeting_metadata.title} date={bot.join_at} platform={platform} />
                        : <BotComponent key={bot.id} id={bot.id} meeting_title={`${formattedPlatform} call with metadata not present`} date={bot.join_at} platform={platform} />

                );
            }) :
              <p> Bot information unable to be found. </p>
            }
        </>
    );
}