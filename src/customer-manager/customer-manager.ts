import {Inject, Injectable} from '@nestjs/common';
import {CustomerManagerInterface} from "./customer.manager.interface";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";
import {ChannelsToCheckInterface} from "./model/channels-to-check.interface";
import {CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "./model/channels-to-rewrite.model";
import {RewriterClientInterface} from "../client/rewriter/rewriter.client.interface";
import {
    SendToRewriteRequestConverterInterface
} from "../converter/request/send-to-rewrite/send-to-rewrite.request.converter.interface";
import {RewriteContentResponseInterface} from "../client/rewriter/model/res/rewrite-content.response.interface";
import {ConfigInterface} from "../config/config.interface";
import {PromptInterface} from "../model/prompt/prompt.interface";
import {ChannelsWithPostsModel} from "../content-agent/model/channel-with-posts.model";


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(
        @Inject('SEND_TO_REWRITE_REQUEST_CONVERTER') private sendToRewriteConverter : SendToRewriteRequestConverterInterface,
        @Inject('REWRITER_CLIENT') private rewriterClient : RewriterClientInterface,
        @Inject('CONTENT_AGENT') private contentAgent : ContentAgentInterface,
        @Inject('CONFIG') private config : ConfigInterface,
    ) {
    }

    async checkChannels(channelsToCheck : ChannelsToCheckInterface): Promise<CheckedChannelsModel> {
        return await this.contentAgent.checkChannels(channelsToCheck.channelsToCheck)
    }
    async rewriteContent(channelsToRewrite : ChannelsToRewriteModel, prompt : PromptInterface) : Promise<ChannelsWithPostsModel> {
        return await this.contentAgent.getChannelsWithPosts(channelsToRewrite)
        /*const request = this.sendToRewriteConverter.convert(
            {link : this.config.get('SEND_TO_REWRITE_URL')},
            await this.contentAgent.getChannelsWithPosts(channelsToRewrite),
            prompt
        )
        return await this.rewriterClient.sendToRewrite(request)*/
    }
}
