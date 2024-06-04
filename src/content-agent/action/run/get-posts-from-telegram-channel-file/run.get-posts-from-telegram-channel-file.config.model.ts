import {PathModel} from "../../../../model/path/path.model";


//НАДО ДУМАЮ СДЕЛАТЬ ЭТО АБСТРАКТНЫМ КОНФИГОМ, Т.К. БУДУТ ФАЙЛЫ ЗАПУСКАТЬСЯ И МЫ ТУДА БУДЕМ ДАННЫЕ ПЕРЕДАВАТЬ
export interface RunGetPostsFromTelegramChannelFileConfigModel {
    pathToFile : PathModel
}