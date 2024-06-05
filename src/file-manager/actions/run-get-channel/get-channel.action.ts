import {PathInterface} from "../../../model/path/path.interface";
import {ChannelWithPostsModel} from "../../../content-agent/model/channel-with-posts.model";
import {Worker} from "worker_threads";
import {ChannelToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";
import {GetChannelActionInterface} from "./get-channel.action.interface";

export class GetChannelAction implements GetChannelActionInterface{

    async run(channel: ChannelToRewriteModel, pathToFile: PathInterface): Promise<ChannelWithPostsModel> {
        return new Promise((resolve, reject) => {
            //подумать про new Worker(), мне кажется, что здесь не должно быть слово New Worker
            const worker = new Worker(pathToFile.pathToFile, {
                workerData: {
                    link: channel.link,
                    limit: channel.limit,
                }
            });

            worker.on('message', message => {
                if (Array.isArray(message)) {
                    resolve({
                        channelLink: channel.link.link,
                        posts: message,
                        status: 'OK',
                    })
                } else {
                    console.log(`Сообщение не соответствует типу Boolean`)
                    console.log(message)
                    resolve({
                        channelLink: channel.link.link,
                        status: 'ERROR',

                    })
                }

            });
            worker.on('error', (error) => {
                console.log(`Воркер завешился с ошибкой`)
                console.log(error)
                resolve({
                    channelLink: channel.link.link,
                    status: 'ERROR',
                    errorMessage: JSON.stringify(error),
                })
            });
        })
    }

}