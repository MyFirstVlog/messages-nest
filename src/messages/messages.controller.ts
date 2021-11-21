import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

//* no se pone injectable porque este esta consumiento ya las clases internas sus dependeincas internas

@Controller('messages')
export class MessagesController {
    constructor(public messagesService : MessagesService){
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll()
    }
    @Post()
    createMessages(@Body() body:CreateMessageDto){
        return {
            msg:true,
            value: this.messagesService.create(body.content)
        }
    }
    @Get('/:id')
    async getMessage(@Param('id') id : string){
        const message = await this.messagesService.findOne(id);
       
        if(!message){
            throw new NotFoundException('Message was not found !!!');
        }

        return message;
    }
    

}
