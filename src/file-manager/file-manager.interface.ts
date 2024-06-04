import {CheckedChannelModel} from "../content-agent/checker/model/checked-channels.model";
import {ChannelToCheckModel} from "../customer-manager/model/channel-to-check.model";
import {PathModel} from "../model/path/path.model";

export interface FileManagerInterface {
    checkChannel(channelToCheck : ChannelToCheckModel, pathToFile : PathModel) : Promise<CheckedChannelModel>
}