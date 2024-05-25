import {InputModel} from "./input.model";
import {TelegramChannelLinkInterface} from "../../../model/link/telegram.channel.link.interface";

export interface CheckTelegramChannelInputModel extends InputModel{
    channelLink : TelegramChannelLinkInterface
}