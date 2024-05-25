import {parentPort, workerData} from 'worker_threads'
import {StringSession} from "telegram/sessions";
import {Api, TelegramClient} from "telegram";
import {Config} from "../config/config";

(async () => {
    console.log(`Файл запущен по пути`)
    console.log(`${process.argv[1]}`)
    const channelLink = workerData.channelLink //ссылка на канал, которая прилетает из Parenta
    const config = new Config()
    const client = new TelegramClient(new StringSession(config.get('STRING_SESSION')), parseInt(config.get('API_ID')), config.get('API_HASH'), {});
    await client.connect()
    const result = await main(client, channelLink)
    await client.disconnect()
    parentPort.postMessage(result);
    process.exit(0)

})()

async function main(client : TelegramClient, channelLink : string) {
    const result = await client.invoke(
        new Api.channels.GetFullChannel({
            channel: channelLink,
        })
    )
    const fullChat = (result.fullChat) as Api.TypeChatFull & { flags?: number }
    return (fullChat.flags === 1073766433)

}