import {ChannelsToCheckInterface} from "../customer-manager/model/channels-to-check.interface";
import {CheckedChannelsModel} from "./checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {ChannelsWithPostsModel} from "./model/channel-with-posts.model";
import {ChannelToCheckInterface} from "../customer-manager/model/channel-to-check.interface";

export interface ContentAgentInterface {
    checkChannels(channelsToCheck : ChannelToCheckInterface[]) : Promise<CheckedChannelsModel>
    getChannelsWithPosts(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel>
}