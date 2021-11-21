import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController]  //* Added automatically 
})
export class MessagesModule {}
