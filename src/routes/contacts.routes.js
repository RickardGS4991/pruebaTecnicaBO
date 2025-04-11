import { Router } from 'express';
import { HubspotFunctionsImpl } from '../model/contacts.model.js';
import { ContactsController } from '../controller/contacts.controller.js';

const contactsRouter = new Router();
const datasource = new HubspotFunctionsImpl();
const controller = new ContactsController(datasource);

contactsRouter.get('/getallcontacts', (req, res) => {
    controller.getContacts(req, res);
});

contactsRouter.post('/createcontact', (req, res) => {
    controller.create(req, res);
});

contactsRouter.get('/contact/:id', (req, res) => {
    controller.getContact(req, res);
});

contactsRouter.get('/getcontactwithemail/:email', (req, res) => {
    controller.getContactWithEmail(req,res);
});

contactsRouter.patch('/updatecontact/:id', (req, res) => {
    controller.update(req, res);
});

contactsRouter.delete('/deletecontact/:id', (req, res) => {
    controller.delete(req, res);
});

export default contactsRouter;