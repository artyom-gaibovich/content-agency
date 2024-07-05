import {CheckedChannelsInterface} from "./checker/model/checked-channels.interface";
import {ChannelsToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {ChannelToCheckInterface} from "../customer-manager/model/channel-to-check.interface";
import {ChannelsWithPostsInterface} from "./model/channel-with-posts.interface";

export interface ContentAgentInterface {
    checkChannels(channelsToCheck : ChannelToCheckInterface[]) : Promise<CheckedChannelsInterface>
    getChannelsWithPosts(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsInterface>
}