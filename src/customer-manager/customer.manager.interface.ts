import {ChannelsToCheckInterface} from "./model/channels-to-check.interface";
import {CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "./model/channels-to-rewrite.model";
import {ChannelsWithPostsModel} from "../content-agent/model/channel-with-posts.model";
import {RewriteContentResponseInterface} from "../client/rewriter/model/res/rewrite-content.response.interface";
import {PromptInterface} from "../model/prompt/prompt.interface";

export interface CustomerManagerInterface {
    checkChannels(channelsToCheck : ChannelsToCheckInterface) : Promise<CheckedChannelsModel>
    rewriteContent(channelsToRewrite : ChannelsToRewriteModel, prompt : PromptInterface) : Promise<RewriteContentResponseInterface>
}