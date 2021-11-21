import { Module } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';


@Module({
  controllers: [MessagesController],  //* Added automatically 
  providers : [MessagesService, MessageRepository] //* thingsd that can be use as depedency for other classes
})
export class MessagesModule {}
