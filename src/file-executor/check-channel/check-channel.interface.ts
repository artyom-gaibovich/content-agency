import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {PathInterface} from "../../model/path/path.interface";
import {CheckedChannelModel} from "../../content-agent/checker/model/checked-channels.model";

export interface CheckChannelActionInterface {
    run(channelToCheck : ChannelToCheckInterface, pathToFile : PathInterface) : Promise<CheckedChannelModel>
}