import {PathInterface} from "./path.interface";
//Надо ли так упарываться??
//Надо подумать про ENUM, стоит ли сюда прикручивать
export interface TelegramCheckTelegramChannelPathInterface extends PathInterface{
    path : string
}