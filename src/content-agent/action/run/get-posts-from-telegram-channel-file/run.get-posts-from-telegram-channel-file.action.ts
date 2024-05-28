import {
    RunGetPostsFromTelegramChannelFileInterfaceAction
} from "./run.get-posts-from-telegram-channel-file.interface.action";
import {RunGetPostsFromTelegramChannelFileConfigAction} from "./run.get-posts-from-telegram-channel-file.config.action";
import {Worker} from "worker_threads";
import {message} from "telegram/client";
import {ChannelWithPostsModel} from "../../../../customer-manager/model/response/rewrite-posts.response.model";
import {LinkInterface} from "../../../../model/link/link.interface";


export class RunGetPostsFromTelegramChannelFileAction implements RunGetPostsFromTelegramChannelFileInterfaceAction{

    constructor(private config : RunGetPostsFromTelegramChannelFileConfigAction) {
    }
    //надо ли добавлять интерфейсы здесь?
    //вероятно, стоит
    //и ещё здесь может возникать ошибка, допустим SessionString - не правильная, и мы получим false(хотя канал при этом может существовать)
    // и ещё вопрос, стоит ли это проверка на instance Boolean не лишняя, и можно ли декомпозировать просто на Run без привязки к тг-файлам
    // Стоило ли декомпозировать на Input/Output модель???
    // Если да --> то есть ли смысл в модели канала?
    async run(link : LinkInterface, limit? : number) : Promise<ChannelWithPostsModel> {
        return new Promise((resolve, reject) => {
            //подумать про new Worker(), мне кажется, что здесь не должно быть слово New Worker
            const worker = new Worker(this.config.getPath().pathToFile, { workerData : {
                link : link,
                    limit : limit
                }});
            worker.on('message', message => {
                if(Array.isArray(message)) {
                    resolve({
                        channelLink : link.link,
                        posts : message,
                        status : 'OK',
                    })
                }
                else {
                    console.log(`Сообщение не соответствует типу Boolean`)
                    console.log(message)
                    resolve({
                        channelLink : link.link,
                        status : 'ERROR',

                    })
                }

            });
            worker.on('error', (error) => {
                console.log(`Воркер завешился с ошибкой`)
                console.log(error)
                resolve({
                    channelLink : link.link,
                    status : 'ERROR',
                    errorMessage: JSON.stringify(error),
                })
            });
        });
    }
}