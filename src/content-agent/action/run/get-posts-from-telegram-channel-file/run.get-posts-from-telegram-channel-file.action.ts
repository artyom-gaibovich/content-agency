import {
    RunGetPostsFromTelegramChannelFileInterfaceAction
} from "./run.get-posts-from-telegram-channel-file.interface.action";
import {RunGetPostsFromTelegramChannelFileConfigAction} from "./run.get-posts-from-telegram-channel-file.config.action";
import {
    GetPostsFromTelegramChannelInputModel
} from "../../../../file/model/input/get-posts-from-telegram-channel.input.model";
import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../../file/model/output/get-posts-from-telegram-channel.output.model";
import {Worker} from "worker_threads";
import {message} from "telegram/client";


export class RunGetPostsFromTelegramChannelFileAction implements RunGetPostsFromTelegramChannelFileInterfaceAction{

    constructor(private config : RunGetPostsFromTelegramChannelFileConfigAction) {
    }
    //надо ли добавлять интерфейсы здесь?
    //вероятно, стоит
    //и ещё здесь может возникать ошибка, допустим SessionString - не правильная, и мы получим false(хотя канал при этом может существовать)
    // и ещё вопрос, стоит ли это проверка на instance Boolean не лишняя, и можно ли декомпозировать просто на Run без привязки к тг-файлам
    // Стоило ли декомпозировать на Input/Output модель???
    // Если да --> то есть ли смысл в модели канала?
    async run(inputData : GetPostsFromTelegramChannelInputModel) : Promise<GetPostsFromTelegramChannelOutputModel> {
        return new Promise((resolve, reject) => {
            //подумать про new Worker(), мне кажется, что здесь не должно быть слово New Worker
            const worker = new Worker(this.config.getPath().pathToFile, { workerData : inputData});
            worker.on('message', message => {
                if(Array.isArray(message)) {
                    resolve({
                        status : 'OK',
                        statusMessage : 'Is all OK',
                        outputData : message
                    })
                }
                else {
                    console.log(`Сообщение не соответствует типу Boolean`)
                    console.log(message)
                    resolve({
                        status : 'ERROR',
                        statusMessage: JSON.stringify(message),
                        outputData : []
                    })
                }

            });
            worker.on('error', (error) => {
                console.log(`Воркер завешился с ошибкой`)
                console.log(error)
                resolve({
                    status : 'ERROR',
                    statusMessage: JSON.stringify(message),
                    outputData : []
                })
            });
        });
    }
}