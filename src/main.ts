import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes( //* Global to take all of incoming requests
      new ValidationPipe()
  );
  await app.listen(3000);
}
bootstrap();
