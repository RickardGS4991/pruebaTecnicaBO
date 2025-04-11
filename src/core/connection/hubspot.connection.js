import axios from 'axios';

export class HubSpotConnection {
    static connection = null;
    
    static createHubspotClient(){
        return axios.create({
            baseURL: 'https://api.hubapi.com',
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
    }

    static getHubspotClient() {
        if (!HubSpotConnection.connection) {
            HubSpotConnection.connection = HubSpotConnection.createHubspotClient();
        }
        
        return HubSpotConnection.connection;
    }
}