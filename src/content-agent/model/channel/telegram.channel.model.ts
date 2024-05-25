import {LinkInterface} from "../../../model/link/link.interface";
import {ChannelModel} from "./channel.model";

export interface TelegramChannelModel extends ChannelModel{
    title : string
    link : LinkInterface
    posts : string[]
}

