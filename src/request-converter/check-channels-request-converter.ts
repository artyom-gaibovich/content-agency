import {CheckChannelsRequestConverterInterface} from "./check-channels-request-converter.interface";
import {CheckChannelsRequestModel} from "../customer-manager/model/request/check-channels/check-channels.request.model";
import {ChannelsToCheckModel} from "../customer-manager/model/channels-to-check.model";

export class CheckChannelsRequestConverter implements CheckChannelsRequestConverterInterface{
    convert(request: CheckChannelsRequestModel): ChannelsToCheckModel {
        return {
            channelsToCheck : request.links.map(link => {
                return {
                    channelToCheck : link
                }
            })
        }
    }
}