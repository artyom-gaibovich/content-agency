import {CheckedChannelInterface} from "./model/checked-channels.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";

export interface ChannelCheckerInterface {
    checkChannels(channelsToCheck : ChannelToCheckInterface[]) : Promise<CheckedChannelInterface[]>
}