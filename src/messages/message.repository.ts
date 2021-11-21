import { readFile, writeFile } from "fs/promises";

export class MessageRepository {
    async findOne(id:string):Promise<Object>{
        const contents = await readFile('messages.json', 'utf-8')
        const messages = JSON.parse(contents)
        return messages[id];

    }

    async findAll(): Promise<Object>{
        const contents = await readFile('messages.json', 'utf-8')
        const messages = JSON.parse(contents)
        return messages;
    }

    async create(content: string): Promise<string>{
        const contens = await readFile('messages.json', 'utf-8')
        const messages = JSON.parse(contens)

        const id = Math.floor((Math.random()*999))

        messages[id] = {
            id,
            content
        }

        await writeFile('messages.json', JSON.stringify(messages))

        return(`usuario ${id} creado de manera correcta`)

    }
}