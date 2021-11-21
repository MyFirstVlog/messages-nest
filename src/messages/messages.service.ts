import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./message.repository";

@Injectable()
export class MessagesService{
    constructor(public messagesRepo : MessageRepository){
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