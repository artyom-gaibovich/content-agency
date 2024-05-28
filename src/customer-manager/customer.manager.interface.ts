import {LinkInterface} from "../model/link/link.interface";
import {CheckTelegramChannelOutputModel} from "../file/model/output/check-telegram-channel.output.model";

export interface CustomerManagerInterface {

    checkChannel(request : LinkInterface) : Promise<CheckTelegramChannelOutputModel>
}