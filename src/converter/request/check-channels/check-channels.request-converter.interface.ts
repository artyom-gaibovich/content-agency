import {CheckChannelsRequestModel} from "../../../customer-manager/model/request/check-channels/check-channels.request.model";
import {ChannelsToCheckInterface} from "../../../customer-manager/model/channels-to-check.interface";

export interface CheckChannelsRequestConverterInterface {
    convert(request : CheckChannelsRequestModel) : ChannelsToCheckInterface
}