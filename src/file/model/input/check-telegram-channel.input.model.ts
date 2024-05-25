import {InputDataModel} from "./input-data.model";
import {TelegramChannelLinkInterface} from "../../model/link/telegram.channel.link.interface";

export interface CheckTelegramChannelInputModel extends InputDataModel{
    channelLink : TelegramChannelLinkInterface
}