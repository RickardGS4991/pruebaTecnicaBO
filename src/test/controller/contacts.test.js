import { jest } from '@jest/globals';
import { ContactsController } from "../../controller/contacts.controller.js";

describe('Implemented contacts methods tests', () => {
    const mockHubspotService = {
        newContact: jest.fn(),
        getAllContacts: jest.fn(),
        getContact: jest.fn(),
        getContactWithEmail: jest.fn(),
        updateContact: jest.fn(),
        deleteContact: jest.fn(),
    };
      
    const mockValidator = {
      validate: jest.fn()
    };
    let controller, mockReq, mockRes;
    beforeEach(() => {
        controller = new ContactsController(mockHubspotService);
        mockReq = { body: {} };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        }
    });

    describe('create method tests', () => {
        it('create method works perfectly', async () => {
            mockReq.body = {
                email: 'test@example.com',
                firstname: 'Tests',
                lastname: 'Users'
            };
          
            mockValidator.validate.mockReturnValue({ error: null });
          
            const createdContact = { id: '12345', properties: mockReq.body };
            mockHubspotService.newContact.mockResolvedValue(createdContact);
          
            global.contactValidator = mockValidator;
          
            await controller.create(mockReq, mockRes);
          
            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                data: createdContact,
                message: 'Request successfully implemented'
              });
        });

        it('req.body is not setting', async () => {
            mockReq.body = undefined;
            await controller.create(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(400);
            expect(mockRes.json).toHaveBeenCalledWith({
                data: null,
                message: 'Unable to retrieve information from user'
            });
        });

        it('Email was not setting correctly by user', async () => {
            mockReq.body = {
                email: 'test@example',
                firstname: 'Tests',
                lastname: 'Users'
            };

            mockValidator.validate.mockReturnValueOnce({ error: "\"email\" must be a valid email" });
            await controller.create(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(404);
            expect(mockRes.json).toHaveBeenCalledWith({
                data: null,
                message: "\"email\" must be a valid email"
            });
        });
    });

    describe('getContact method test', () => {
        it('getContact works perfectly', async () => {
            let mockgetAllContactsResponse = [{id: '1'}, {id: '2'}, {id: '3'}];
            mockHubspotService.getAllContacts.mockResolvedValueOnce(mockgetAllContactsResponse);
            await controller.getContacts(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith({
                data: mockgetAllContactsResponse,
                message: `Request successfully implemented`
            });
        });

        it('getContacts do not find any data', async () => {
            mockHubspotService.getAllContacts.mockRejectedValueOnce(new Error('Information is not available'));
            await controller.getContacts(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.send).toHaveBeenCalled();
        })
    });
});