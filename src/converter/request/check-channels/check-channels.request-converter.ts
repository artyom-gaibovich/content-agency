import {CheckChannelsRequestModel} from "../../../customer-manager/model/request/check-channels/check-channels.request.model";
import {ChannelsToCheckInterface} from "../../../customer-manager/model/channels-to-check.interface";
import {Injectable} from "@nestjs/common";
import {CheckChannelsRequestConverterInterface} from "./check-channels.request-converter.interface";

@Injectable()
export class CheckChannelsRequestConverter implements CheckChannelsRequestConverterInterface{
    convert(request: CheckChannelsRequestModel): ChannelsToCheckInterface {
        return {
            channelsToCheck : request.links.map(link => {
                return {
                    channelToCheck : link
                }
            })
        }
    }
}