import { HubSpotConnection } from "../core/connection/hubspot.connection.js";
import { IHubspotFunctions } from "./base/contacts.model.js";

export class HubspotFunctionsImpl extends IHubspotFunctions{
    async newContact(info){
        try {
            const hubspot = HubSpotConnection.getHubspotClient();
            let { email, firstname, lastname } = info;
            const response = await hubspot.post('/crm/v3/objects/contacts', {
                properties: {
                    email,
                    firstname,
                    lastname
                }
            });

            return response.data
        } catch (error) {
            throw new Error('Unable to retrieve information from server');
        }
    }

    async getAllContacts(){
        try {
            const hubspot = HubSpotConnection.getHubspotClient();
            const response = await hubspot.get('/crm/v3/objects/contacts')
            return response.data;
        } catch (error) {
            throw new Error('Unable to retrieve information from server');
        }
    }

    async getContact(id){
        try {
            const hubspot = HubSpotConnection.getHubspotClient();
           const response = await hubspot.get(`/crm/v3/objects/contacts/${id}`); 
           return response.data;
        } catch (error) {
            throw new Error('Unable to retrieve information from server');
        }
    }

    async getContactWithEmail(email){
        try {
            const hubspot = HubSpotConnection.getHubspotClient();
            const response = await hubspot.post('/crm/v3/objects/contacts/search', {
                filterGroups: [
                  {
                    filters: [
                      {
                        propertyName: 'email',
                        operator: 'EQ',
                        value: email,
                      },
                    ],
                  },
                ],
                properties: ['email', 'firstname', 'lastname'],
                limit: 1,
            });
          
            const results = response.data.results;
            if (results.length === 0) {
              return null;
            }
          
            return results[0];
        } catch (error) {
            throw new Error('Unable to retrieve information from server');
        }
    }

    async updateContact(id, info){
        try {
            const hubspot = HubSpotConnection.getHubspotClient();
            const response = await hubspot.patch(`/crm/v3/objects/contacts/${id}`, {
                properties: info
            });

            response.data;
        } catch (error) {
            throw new Error('Unable to retrieve information from server');
        }
    }

    async deleteContact(id){
        try {
            const hubspot = HubSpotConnection.getHubspotClient();
            const response = await hubspot.delete(`/crm/v3/objects/contacts/${id}`);
            if(response.status !== 204){
                return false;
            }

            return true;
        } catch (error) {
            throw new Error();
        }
    }
}