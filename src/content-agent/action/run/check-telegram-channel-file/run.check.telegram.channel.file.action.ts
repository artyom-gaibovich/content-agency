import {Worker} from "worker_threads";
import {RunCheckTelegramChannelInterfaceAction} from "./run.check.telegram.channel.interface.action";
import {RunCheckTelegramChannelFileConfigAction} from "./run.check.telegram.channel.file.config.action";
import {CheckedChannelInterface} from "../../../../customer-manager/model/response/check-channels.response.model";
import {LinkInterface} from "../../../../model/link/link.interface";


export class RunCheckTelegramChannelFileAction implements RunCheckTelegramChannelInterfaceAction{

    constructor(private config : RunCheckTelegramChannelFileConfigAction) {
    }
    //надо ли добавлять интерфейсы здесь?
    //вероятно, стоит
    //и ещё здесь может возникать ошибка, допустим SessionString - не правильная, и мы получим false(хотя канал при этом может существовать)
    // и ещё вопрос, стоит ли это проверка на instance Boolean не лишняя, и можно ли декомпозировать просто на Run без привязки к тг-файлам
    // Стоило ли декомпозировать на Input/Output модель???
    // Если да --> то есть ли смысл в модели канала?
    async run(link : LinkInterface) : Promise<CheckedChannelInterface> {
        return new Promise((resolve, reject) => {
            //подумать про new Worker(), мне кажется, что здесь не должно быть слово New Worker
            const worker = new Worker(this.config.getPath().pathToFile, { workerData : link});
            worker.on('message', message => {
                if(typeof message === 'boolean') {
                    resolve({
                        status : 'OK',
                        channelLink : link.link,
                        isChannelExists : message
                    })
                }
                else {
                    console.log(`Сообщение не соответствует типу Boolean`)
                    console.log(message)
                    resolve({
                        status : 'ERROR',
                        channelLink : link.link,
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
                    channelLink : link.link,
                    isChannelExists : false
                })
            });
        });
    }
}