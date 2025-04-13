import axios from 'axios';

export class HubSpotConnection {
    static connection = null;
    
    static createHubspotClient(){
        return axios.create({
            baseURL: 'https://api.hubapi.com',
            headers: {
                'Authorization': `Bearer pat-na1-9c838c01-93e2-4164-bd19-8ac986eea961`,
                'Content-Type': 'application/json'
            }
        });
    }

    static async getHubspotClient() {
        if (!HubSpotConnection.connection) {
            HubSpotConnection.connection = HubSpotConnection.createHubspotClient();
        }
        
        return HubSpotConnection.connection;
    }
}