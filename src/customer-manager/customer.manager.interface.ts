import {ChannelsToCheckModel} from "./model/channels-to-check.model";
import {CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "./model/channels-to-rewrite.model";
import {ChannelsWithPostsModel} from "../content-agent/model/channel-with-posts.model";

export interface CustomerManagerInterface {
    checkChannels(channelsToCheck : ChannelsToCheckModel) : Promise<CheckedChannelsModel>
    rewriteContent(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel>
}