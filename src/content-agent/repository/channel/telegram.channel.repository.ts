import {TelegramChannelRepositoryInterface} from "./telegram.channel.repository.interface";
import {LinkInterface} from "../../../model/link/link.interface";
import {TelegramChannelModel} from "../../model/channel/telegram.channel.model";

export class TelegramChannelRepository implements TelegramChannelRepositoryInterface {
    findOneByChannelLink(channelLink: LinkInterface): TelegramChannelModel {
        return
    }
}