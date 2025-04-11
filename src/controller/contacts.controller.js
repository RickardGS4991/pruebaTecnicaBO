import { contactValidator, updateContactValidator } from "./validator/contacts.validator.js";

export class ContactsController{
    constructor(hubspot){
        this.hubspot = hubspot;
    }

    async create(req, res){
        try {
            let info = req.body;
            if(!info){
                res.status(400).json({data: null, message: 'Unable to retrieve information from user'});
                return;
            }

            const { error } = contactValidator.validate(info);
            if(error){
                res.status(404).json({data: null, message: error.details[0].message});
                return;
            }
            const result = await this.hubspot.newContact(info);
            res.status(201).json({ data: result, message: `Request successfully implemented`});
        } catch (error) {
            res.status(500).send();
        }
    }

    async getContacts(req, res){
        try {
            const result = await this.hubspot.getAllContacts();
            res.status(201).json({ data: result, message: `Request successfully implemented`});
        } catch (error) {
            res.status(500).send();
        }
    }

    async getContact(req, res){
        try {
            const id = req.params.id;
            const result = await this.hubspot.getContact(id);
            res.status(201).json({ data: result, message: `Request successfully implemented`});
        } catch (error) {
            res.status(500).send();
        }
    }

    async getContactWithEmail(req, res){
        try {
            let email = req.params.email;

            const result = await this.hubspot.getContactWithEmail(email);
            res.status(201).json({ data: result, message: `Request successfully implemented`});
        } catch (error) {
            res.status(500).send();
        }
    }

    async update(req, res){
        try {
            let id = req.params.id;
            let info = req.body;
            if(!info){
                res.status(400).json({ data: null, message: 'Unable to retrieve information from user' });
                return;
            }

            const { error } = updateContactValidator.validate(info);
            if(error){
                res.status(404).json({data: null, message: error.details[0].message});
                return;
            }

            const result = await this.hubspot.updateContact(id, info);
            res.status(201).json({ data: result, message: `Request successfully implemented`});
        } catch (error) {
            res.status(500).send();
        }
    }

    async delete(req, res){
        try {
            let id = req.params.id;
            const result = await this.hubspot.deleteContact(id);
            res.status(201).json({ data: result, message: `Request successfully implemented`});
        } catch (error) {
            res.status(500).send();
        }
    }
}