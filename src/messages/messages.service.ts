import { MessageRepository } from "./message.repository";

export class MessagesService{
    messagesRepo : MessageRepository;
    
    constructor(){
        //* Service is creating its own dependencies , it needs to have a repo inside the service
        //* we dont do below often
        this.messagesRepo = new MessageRepository()
    }
    findOne(id : string) : Object{
        return this.messagesRepo.findOne(id);
    }
    findAll() : Object{
        return this.messagesRepo.findAll();
    }
    create(content : string){
        return this.messagesRepo.create(content)
    }
}