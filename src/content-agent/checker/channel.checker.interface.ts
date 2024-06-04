import {CheckedChannelsModel} from "./model/checked-channels.model";
import {ChannelToCheckModel} from "../../customer-manager/model/channel-to-check.model";

export interface ChannelCheckerInterface {
    check(channelsToCheck : ChannelToCheckModel[]) : Promise<CheckedChannelsModel>
}