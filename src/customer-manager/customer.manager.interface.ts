import {LinkInterface} from "../model/link/link.interface";
import {CheckTelegramChannelOutputModel} from "../file/model/output/check-telegram-channel.output.model";
import {CheckChannelsRequestModel} from "./model/request/check-channels.request.model";
import {CheckChannelsResponseModel} from "./model/response/check-channels.response.model";

export interface CustomerManagerInterface {

    checkChannel(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel>
}