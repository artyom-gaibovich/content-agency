import {ChannelModel} from "./channel.model";

export interface TelegramChannelModel extends ChannelModel{
    link : string
    posts : string[]
}

