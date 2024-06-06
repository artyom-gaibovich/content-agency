import {CheckedChannelsModel} from "./model/checked-channels.model";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";

export interface ChannelCheckerInterface {
    checkChannels(channelsToCheck : ChannelToCheckInterface[]) : Promise<CheckedChannelsModel>
}