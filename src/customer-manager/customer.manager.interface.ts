import {LinkInterface} from "../model/link/link.interface";
import {CheckChannelResponseModel} from "./model/check.channel.response.model";
import {CheckChannelRequestModel} from "./model/check.channel.request.model";

export interface CustomerManagerInterface {
    checkChannel(request : CheckChannelRequestModel) : Promise<CheckChannelResponseModel>
}