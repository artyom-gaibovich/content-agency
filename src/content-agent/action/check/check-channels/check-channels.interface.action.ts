import {CheckChannelsResponseModel} from "../../../../customer-manager/model/response/check-channels.response.model";
import {CheckChannelsRequestModel} from "../../../../customer-manager/model/request/check-channels.request.model";

export interface CheckChannelsInterfaceAction {
    checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel>
}