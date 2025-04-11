export class IHubspotFunctions{
    newContact(info){
        throw new Error('newContact() must be implemented');
    }
    getAllContacts(){
        throw new Error('getAllContacts() must be implemented');
    }
    getContact(id){
        throw new Error('getContact() must be implemented');
    }
    getContactWithEmail(email){
        throw new Error('getContactWithEmail() must be implemented');
    }
    updateContact(id, info){
        throw new Error('updateContact() must be implemented');
    }
    deleteContact(id){
        throw new Error('deleteContact() must be implemented');
    }
}