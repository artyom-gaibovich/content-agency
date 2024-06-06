import {ChannelsToCheckInterface} from "../../../customer-manager/model/channels-to-check.interface";
import {ChannelToCheckInterface} from "../../../customer-manager/model/channel-to-check.interface";
import {CheckedChannelModel} from "../../../content-agent/checker/model/checked-channels.model";
import {PathInterface} from "../../../model/path/path.interface";

export interface CheckChannelActionInterface {
    run(channelToCheck : ChannelToCheckInterface, pathToFile : PathInterface) : Promise<CheckedChannelModel>
}