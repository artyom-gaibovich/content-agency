import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/find-telegram-channel.input.model";


export interface TelegramChannelRepositoryInterface{
    checkOneByChannelLink(channelLink : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel>
}