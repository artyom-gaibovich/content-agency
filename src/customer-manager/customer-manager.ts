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


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(
        @Inject('SEND_TO_REWRITE_REQUEST_CONVERTER') private sendToRewriteConverter : SendToRewriteRequestConverterInterface,
        @Inject('REWRITER_CLIENT') private rewriterClient : RewriterClientInterface,
        @Inject('CONTENT_AGENT') private contentAgent : ContentAgentInterface
    ) {
    }

    async checkChannels(channelsToCheck : ChannelsToCheckInterface): Promise<CheckedChannelsModel> {
        return await this.contentAgent.checkChannels(channelsToCheck.channelsToCheck)
    }
    async rewriteContent(channelsToRewrite : ChannelsToRewriteModel) : Promise<RewriteContentResponseInterface> {
        const data = await this.contentAgent.getChannelsWithPosts(channelsToRewrite)
        const request = this.sendToRewriteConverter.convert({link : 'http://localhost:4040/api/gpt/generate'}, data, 'PromptConnectText')
        return await this.rewriterClient.sendToRewrite(request)
    }
}
