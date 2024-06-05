import {CheckChannelsRequestModel} from "../../customer-manager/model/request/check-channels/check-channels.request.model";
import {ChannelsToCheckModel} from "../../customer-manager/model/channels-to-check.model";

export interface CheckChannelsRequestConverterInterface {
    convert(request : CheckChannelsRequestModel) : ChannelsToCheckModel
}