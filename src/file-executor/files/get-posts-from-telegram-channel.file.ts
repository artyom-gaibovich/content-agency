import {parentPort, workerData} from 'worker_threads'
import {StringSession} from "telegram/sessions";
import {Api, TelegramClient} from "telegram";
import {Config} from "../../config/config";

(async () => {
    try {
        //какого фига программа крашится тут??
        //если этот воркер не отработал, всё приложение не должно вылетать
        console.log(`Файл запущен по пути`)
        console.log(`${process.argv[1]}`)
        console.log(workerData)
        const channelLink = workerData.link.link //ссылка на канал, которая прилетает из Parenta
        const config = new Config()
        const client = new TelegramClient(new StringSession(config.get('STRING_SESSION')), parseInt(config.get('API_ID')), config.get('API_HASH'), {});
        await client.connect()
        const result = await main(client, channelLink, workerData.limit)
        await client.disconnect()
        parentPort.postMessage(result);
    }
    catch (e) {
        console.log('Внутри воркера произошла ошибка')
        parentPort.postMessage(e);

    }
    finally {
        process.exit(0)
    }



})()

async function main(client : TelegramClient, channelLink : string, LIMIT_MESSAGES: number = 10) {
    await client.connect()
    const messages = await client.getMessages(channelLink, {
        limit: LIMIT_MESSAGES,
    })
    return messages.map(msg => msg.message)
}