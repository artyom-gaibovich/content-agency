import {ChannelsToCheckInterface} from "./model/channels-to-check.interface";
import {CheckedChannelsInterface} from "../content-agent/checker/model/checked-channels.interface";
import {ChannelsToRewriteModel} from "./model/channels-to-rewrite.model";
import {RewriteContentResponseInterface} from "../client/rewriter/model/res/rewrite-content.response.interface";
import {PromptInterface} from "../model/prompt/prompt.interface";

export interface CustomerManagerInterface {
    checkChannels(channelsToCheck : ChannelsToCheckInterface) : Promise<CheckedChannelsInterface>
    rewriteContent(channelsToRewrite : ChannelsToRewriteModel, prompt : PromptInterface) : Promise<RewriteContentResponseInterface>
}