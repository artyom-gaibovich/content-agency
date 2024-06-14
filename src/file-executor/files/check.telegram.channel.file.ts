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
        console.log(workerData.link)
        const channelLink = workerData.link //ссылка на канал, которая прилетает из Parenta
        const config = new Config()
        const client = new TelegramClient(new StringSession(config.get('STRING_SESSION')), parseInt(config.get('API_ID')), config.get('API_HASH'), {});
        await client.connect()
        const result = await main(
            client,
            channelLink,
            config,
        )
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

async function main(client : TelegramClient, channelLink : string, config) {
    const result = await client.invoke(
        new Api.channels.GetFullChannel({
            channel: channelLink,
        })
    )
    console.log(JSON.stringify(result))
    const fullChat = (result.fullChat) as Api.TypeChatFull & { flags?: number }
    console.log(fullChat.flags, 'flag')
    //const res = chnId1 === fullChat.flags || chnId2 === fullChat.flags || chnId3 === fullChat.flags
    return result.hasOwnProperty('users')
}