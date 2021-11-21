import {IsString} from 'class-validator';
export class CreateMessageDto {
    @IsString() //valida realmente si el contenido efectivamente es str, recordarr que los decorators sirven como para expandir o limitir en lo que este encima de
    content: string;  
}