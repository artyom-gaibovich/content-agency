import {PathInterface} from "../../../../model/path/path.interface";


//НАДО ДУМАЮ СДЕЛАТЬ ЭТО АБСТРАКТНЫМ КОНФИГОМ, Т.К. БУДУТ ФАЙЛЫ ЗАПУСКАТЬСЯ И МЫ ТУДА БУДЕМ ДАННЫЕ ПЕРЕДАВАТЬ
export interface RunGetPostsFromTelegramChannelFileConfigModel {
    pathToFile : PathInterface
}