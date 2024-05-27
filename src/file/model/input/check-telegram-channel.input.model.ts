import {InputModel} from "./input.model";
import {TelegramChannelLinkInterface} from "../../../model/link/telegram.channel.link.interface";

export interface FindTelegramChannelInputModel extends InputModel{
    channelLink : TelegramChannelLinkInterface
}