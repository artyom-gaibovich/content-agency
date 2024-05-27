import {PathInterface} from "../../../model/path/path.interface";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/find-telegram-channel.input.model";


//НАДО ДУМАЮ СДЕЛАТЬ ЭТО АБСТРАКТНЫМ КОНФИГОМ, Т.К. БУДУТ ФАЙЛЫ ЗАПУСКАТЬСЯ И МЫ ТУДА БУДЕМ ДАННЫЕ ПЕРЕДАВАТЬ
export interface RunCheckTelegramChannelFileConfigModel {
    pathToFile : PathInterface
    inputData? : CheckTelegramChannelInputModel
}