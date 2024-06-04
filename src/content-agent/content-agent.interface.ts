import {ChannelsToCheckModel} from "../customer-manager/model/channels-to-check.model";
import {CheckedChannelsModel} from "./checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {ChannelsWithPostsModel} from "./model/channel-with-posts.model";
import {ChannelToCheckModel} from "../customer-manager/model/channel-to-check.model";

export interface ContentAgentInterface {
    checkChannels(channelsToCheck : ChannelToCheckModel[]) : Promise<CheckedChannelsModel>
    getChannelsWithPosts(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel>
}