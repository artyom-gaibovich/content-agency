import {ChannelsToCheckModel} from "./model/channels-to-check.model";
import {CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";

export interface CustomerManagerInterface {
    checkChannels(channelsToCheck : ChannelsToCheckModel) : Promise<CheckedChannelsModel>
    //rewriteContent(channelsToRewrite : ChannelsToRewriteModel) : Promise<RewrittenContentModel>
}