import {CheckChannelsRequestModel} from "../customer-manager/model/request/check-channels.request.model";
import {CheckChannelsResponseModel} from "../customer-manager/model/response/check-channels.response.model";

export interface ContentAgentInterface {
    checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel>
}