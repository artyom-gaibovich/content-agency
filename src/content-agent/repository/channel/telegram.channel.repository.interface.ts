import {LinkInterface} from "../../../model/link/link.interface";
import {ChannelModel} from "../../model/channel/channel.model";
import {TelegramChannelModel} from "../../model/channel/telegram.channel.model";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";


export interface TelegramChannelRepositoryInterface {
    checkOneByChannelLink(channelLink : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel>

}