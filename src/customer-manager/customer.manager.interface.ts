import {ChannelsToCheckInterface} from "./model/channels-to-check.interface";
import {CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "./model/channels-to-rewrite.model";
import {ChannelsWithPostsModel} from "../content-agent/model/channel-with-posts.model";

export interface CustomerManagerInterface {
    checkChannels(channelsToCheck : ChannelsToCheckInterface) : Promise<CheckedChannelsModel>
    rewriteContent(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel>
}