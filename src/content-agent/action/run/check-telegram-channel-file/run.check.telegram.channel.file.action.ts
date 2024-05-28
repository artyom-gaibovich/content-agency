import {Worker} from "worker_threads";
import {RunCheckTelegramChannelInterfaceAction} from "./run.check.telegram.channel.interface.action";
import {CheckTelegramChannelOutputModel} from "../../../../file/model/output/check-telegram-channel.output.model";
import {RunCheckTelegramChannelFileConfigAction} from "./run.check.telegram.channel.file.config.action";
import {CheckTelegramChannelInputModel} from "../../../../file/model/input/check-telegram-channel.input.model";


export class RunCheckTelegramChannelFileAction implements RunCheckTelegramChannelInterfaceAction{

    constructor(private config : RunCheckTelegramChannelFileConfigAction) {
    }
    //надо ли добавлять интерфейсы здесь?
    //вероятно, стоит
    //и ещё здесь может возникать ошибка, допустим SessionString - не правильная, и мы получим false(хотя канал при этом может существовать)
    // и ещё вопрос, стоит ли это проверка на instance Boolean не лишняя, и можно ли декомпозировать просто на Run без привязки к тг-файлам
    // Стоило ли декомпозировать на Input/Output модель???
    // Если да --> то есть ли смысл в модели канала?
    async run(link : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel> {
        return new Promise((resolve, reject) => {
            //подумать про new Worker(), мне кажется, что здесь не должно быть слово New Worker
            const worker = new Worker(this.config.getPath().pathToFile, { workerData : link});
            worker.on('message', message => {
                if(typeof message === 'boolean') {
                    resolve({
                        isChannelExist : message
                    })
                }
                else {
                    console.log(`Сообщение не соответствует типу Boolean`)
                    console.log(message)
                    resolve({
                        isChannelExist : false
                    })
                }

            });
            worker.on('error', (error) => {
                console.log(`Воркер завешился с ошибкой`)
                console.log(error)
                reject({
                    isChannelExist : false
                })
            });
        });
    }
}