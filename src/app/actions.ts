'use server'

//creates a bot with the Recall API
export async function createBot(prevState: any, formData: FormData) {
    const meeting_url = formData.get('meeting-url');
    const bot_name = formData.get('bot-name');

    try {
        const url = process.env.API_URL;
        if(!url) return;
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: process.env.API_TOKEN || ""
            },
            body: JSON.stringify({
                meeting_url: meeting_url,
                bot_name: bot_name,
            })
        };

        const res = await fetch(url, options)
        const data = await res.json();

        if(res.status !== 201) return {message: JSON.stringify(data)}

        return {message: `Successfully created bot!`}
    } catch (e) {
        return { message: `Failed to create bot: ${e}` }
    }
}

//retrieves a single Recall bot with an id (string)
export async function retrieveBot(id: string){
    try {
        const url = `${process.env.API_URL}${id}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: process.env.API_TOKEN || ""
            },
        };

        const res = await fetch(url, options)
        const data = await res.json();

        if(res.status !== 200) {
            console.error( `retrieveBot returned with a status of ${res.status}. Extra information can be found here: ${JSON.stringify(data)}`)
            return {message: `retrieveBot returned with a status of ${res.status}. Extra information can be found here: ${data}`}
        }

        console.log("Successfully retrieved bot!")
        return {message: JSON.stringify(data)}

    } catch (e) {
        console.error(`Failed to retrieve bot: ${e}`)
        return { message: `Failed to retrieve bot: ${e}` }
    }
}

//gets the bot transcript for a Recall bot by id (string)
export async function getBotTranscript(id: string) {
    try {
        const url = `${process.env.API_URL}${id}/transcript/`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: process.env.API_TOKEN || ""
            }
        };

        const res = await fetch(url, options)
        const data = await res.json();

        if(res.status !== 200) {
            console.error( `getBotTranscript returned with a status of ${res.status}. Extra information can be found here: ${data}`)
            return {message: `getBotTranscript returned with a status of ${res.status}. Extra information can be found here: ${data}`}
        }

        console.log("Successfully retrieved bot transcript!")
        console.log("data: ", data);
        return {message: JSON.stringify(data)}


    } catch (e) {
        console.error(`Failed to retrieve bot transcript: ${e}`)
        return { message: `Failed to retrieve bot transcript: ${e}` }
    }
}