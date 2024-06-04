import {PathModel} from "../../../model/path/path.model";
import {ChannelWithPostsModel} from "../../../content-agent/model/channel-with-posts.model";
import {ChannelToRewrite} from "../../../customer-manager/model/channels-to-rewrite.model";
import {Worker} from "worker_threads";

export class RunGetChannelAction {

    async run(channel: ChannelToRewrite, pathToFile: PathModel): Promise<ChannelWithPostsModel> {
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
                        channelLink: channel.link,
                        posts: message,
                        status: 'OK',
                    })
                } else {
                    console.log(`Сообщение не соответствует типу Boolean`)
                    console.log(message)
                    resolve({
                        channelLink: channel.link,
                        status: 'ERROR',

                    })
                }

            });
            worker.on('error', (error) => {
                console.log(`Воркер завешился с ошибкой`)
                console.log(error)
                resolve({
                    channelLink: channel.link,
                    status: 'ERROR',
                    errorMessage: JSON.stringify(error),
                })
            });
        })
    }

}