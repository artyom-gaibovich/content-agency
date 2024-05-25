import {Worker} from "worker_threads";
import {TelegramLinkInterface} from "../../../model/link/telegram.link.interface";



export class RunGetTelegramChannelFileAction {
    async run(pathToWorker : string, link : TelegramLinkInterface) : Promise<boolean> {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorker, { workerData : link });
            worker.on('message', message => {
                if(message instanceof Boolean) {
                    resolve(message)
                }
                else {
                    console.log(`Сообщение не соотствтвует типу Boolean`)
                    console.log(message)
                    reject(false)
                }

            });
            worker.on('error', (error) => {
                console.log(`Воркер завешился с ошибкой`)
                console.log(error)
                reject(false)
            });
            worker.on('exit', (code : any) => {
                if (code !== 0)
                    reject(`Worker stopped with exit code ${code}`);
            });
        });
    }
}