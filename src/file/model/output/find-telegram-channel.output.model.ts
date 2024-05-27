import {OutputModel} from "./output.model";

export interface FindTelegramChannelInputModel extends OutputModel{
    channelLink : string
    posts : string[]

}