import {Worker} from "worker_threads";
import {TelegramChannelLinkInterface} from "../../../model/link/telegram.channel.link.interface";
import {RunCheckTelegramChannelInterfaceAction} from "./run.check.telegram.channel.interface.action";
import {PathInterface} from "../../../model/path/path.interface";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";



export class RunCheckTelegramChannelFileAction implements RunCheckTelegramChannelInterfaceAction{
    //надо ли добавлять интерфейсы здесь?
    //вероятно, стоит
    //и ещё здесь может возникать ошибка, допустим SessionString - не правильная, и мы получим false(хотя канал при этом может существовать)
    // и ещё вопрос, стоит ли это проверка на instance Boolean не лишняя, и можно ли декомпозировать просто на Run без привязки к тг-файлам
    // Стоило ли декомпозировать на Input/Output модель???
    // Если да --> то есть ли смысл в модели канала?
    async run(pathToFile : PathInterface, inputData : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel> {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToFile.path, { workerData : inputData});
            worker.on('message', message => {
                if(typeof message === 'boolean') {
                    resolve({
                        isChannelExist : message
                    })
                }
                else {
                    console.log(`Сообщение не соотствтвует типу Boolean`)
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