import {LinkInterface} from "../../../model/link/link.interface";
import {Worker} from "worker_threads";
import {PathInterface} from "../../../model/path/path.interface";
import {CheckChannelActionInterface} from "./check-channel.action.interface";
import {CheckedChannelModel} from "../../../content-agent/checker/model/checked-channels.model";
import {ChannelToCheckModel} from "../../../customer-manager/model/channel-to-check.model";

export class CheckChannelAction implements CheckChannelActionInterface{
    async run(channelToCheck : ChannelToCheckModel, pathToFile : PathInterface) : Promise<CheckedChannelModel> {
        return new Promise<CheckedChannelModel>((resolve, reject) => {
            const worker = new Worker(pathToFile.pathToFile, { workerData : channelToCheck.channelToCheck});
            worker.on('message', message => {
                if(typeof message === 'boolean') {
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