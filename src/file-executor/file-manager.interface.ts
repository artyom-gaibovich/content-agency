import {CheckedChannelModel, CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";
import {ChannelToCheckInterface} from "../customer-manager/model/channel-to-check.interface";
import {PathInterface} from "../model/path/path.interface";
import {ChannelsWithPostsModel} from "../content-agent/model/channel-with-posts.model";
import {ChannelsToRewriteModel,} from "../customer-manager/model/channels-to-rewrite.model";

export interface FileManagerInterface {
    checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelsModel>
    getChannels(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel>
}