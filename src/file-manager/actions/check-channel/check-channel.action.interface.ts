import {ChannelsToCheckModel} from "../../../customer-manager/model/channels-to-check.model";

export interface RunCheckChannelActionInterface {
    run(channelToCheck : ChannelsToCheckModel)
}