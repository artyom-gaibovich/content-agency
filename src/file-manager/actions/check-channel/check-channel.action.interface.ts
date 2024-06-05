import {ChannelsToCheckModel} from "../../../customer-manager/model/channels-to-check.model";
import {ChannelToCheckModel} from "../../../customer-manager/model/channel-to-check.model";
import {CheckedChannelModel} from "../../../content-agent/checker/model/checked-channels.model";
import {PathInterface} from "../../../model/path/path.interface";

export interface CheckChannelActionInterface {
    run(channelToCheck : ChannelToCheckModel, pathToFile : PathInterface) : Promise<CheckedChannelModel>
}