import {Worker} from "worker_threads";
import {CheckChannelInterface} from "./check-channel.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {CheckedChannelModel} from "../../content-agent/checker/model/checked-channels.model";
import {PathInterface} from "../../model/path/path.interface";

export class CheckChannel implements CheckChannelInterface{
    async run(channelToCheck : ChannelToCheckInterface, pathToFile : PathInterface) : Promise<CheckedChannelModel> {
        return new Promise<CheckedChannelModel>((resolve, reject) => {
            const worker = new Worker(pathToFile.pathToFile, { workerData : channelToCheck.channelToCheck});
            worker.on('message', message => {
                if(typeof message === 'boolean') {
                    console.log('ТУТ ВСЁ ОК')
                    resolve({
                        status : 'OK',
                        channelLink : channelToCheck.channelToCheck.link,
                        isChannelExists : message
                    })
                }
                else {
                    console.log(`Сообщение не соответствует типу Boolean`)
                    console.log(message)
                    resolve({
                        status : 'ERROR',
                        channelLink : channelToCheck.channelToCheck.link,
                        isChannelExists : false
                    })
                }

            });
            worker.on('error', (error) => {
                console.log(`Воркер завешился с ошибкой`)
                console.log(error)
                reject({
                    statusMessage : JSON.stringify(error),
                    status : 'ERROR',
                    channelLink : channelToCheck.channelToCheck.link,
                    isChannelExists : false
                })
            });
        });
    }
}