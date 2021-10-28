import  TextToSpeechV1 from 'ibm-watson/text-to-speech/v1'
import { IamAuthenticator } from 'ibm-watson/auth'


export class Speech {
    private textToSpeech;
    private static instance: Speech

    constructor() {
        this.textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: process.env.APIKEY as string,
            }),
            serviceUrl: process.env.SERVICEURL,
        });
    }

    public static getInstance(): Speech {
        if(!Speech.instance) {
            Speech.instance = new Speech();
        }

        return Speech.instance
    }

    async generate(text: string) {
        const synthesizeParams = {
            text: text,
            accept: 'audio/ogg;codecs=opus',
            voice: 'en-US_KevinV3Voice',
        };

        try {

            const response = await this.textToSpeech.synthesize(synthesizeParams); 
            return response.result

        } catch (error: any) {

            console.log(error.message)
        
        }
    }    
}