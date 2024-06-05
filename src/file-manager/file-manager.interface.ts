import {CheckedChannelModel, CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";
import {ChannelToCheckModel} from "../customer-manager/model/channel-to-check.model";
import {PathModel} from "../model/path/path.model";
import {ChannelsWithPostsModel} from "../content-agent/model/channel-with-posts.model";
import {ChannelsToRewriteModel,} from "../customer-manager/model/channels-to-rewrite.model";

export interface FileManagerInterface {
    checkChannels(channelsToCheck: ChannelToCheckModel[]): Promise<CheckedChannelsModel>
    getChannels(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel>
}