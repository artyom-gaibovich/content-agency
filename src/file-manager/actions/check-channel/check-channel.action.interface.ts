import {ChannelsToCheckModel} from "../../../customer-manager/model/channels-to-check.model";
import {ChannelToCheckModel} from "../../../customer-manager/model/channel-to-check.model";
import {CheckedChannelModel} from "../../../content-agent/checker/model/checked-channels.model";
import {PathModel} from "../../../model/path/path.model";

export interface CheckChannelActionInterface {
    run(channelToCheck : ChannelToCheckModel, pathToFile : PathModel) : Promise<CheckedChannelModel>
}