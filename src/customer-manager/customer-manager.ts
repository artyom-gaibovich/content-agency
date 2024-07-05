import {Inject, Injectable} from '@nestjs/common';
import {CustomerManagerInterface} from "./customer.manager.interface";
import {ContentAgentInterface} from "../content-agent/content-agent.interface";
import {ChannelsToCheckInterface} from "./model/channels-to-check.interface";
import {CheckedChannelsInterface} from "../content-agent/checker/model/checked-channels.interface";
import {ChannelsToRewriteModel} from "./model/channels-to-rewrite.model";
import {RewriterClientInterface} from "../client/rewriter/rewriter.client.interface";
import {
    SendToRewriteRequestConverterInterface
} from "../converter/request/send-to-rewrite/send-to-rewrite.request.converter.interface";
import {ConfigInterface} from "../config/config.interface";
import {PromptInterface} from "../model/prompt/prompt.interface";
import {SEND_TO_REWRITE_URL} from "../constants/env.constants";
import {RewriteContentResponseInterface} from "../client/rewriter/model/res/rewrite-content.response.interface";
import {CONFIG, CONTENT_AGENT, REWRITER_CLIENT, SEND_TO_REWRITE_REQUEST_CONVERTER} from "../constants/di.constants";


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(
        @Inject(SEND_TO_REWRITE_REQUEST_CONVERTER) private sendToRewriteConverter : SendToRewriteRequestConverterInterface,
        @Inject(REWRITER_CLIENT) private rewriterClient : RewriterClientInterface,
        @Inject(CONTENT_AGENT) private contentAgent : ContentAgentInterface,
        @Inject(CONFIG) private config : ConfigInterface,
    ) {
    }

    async checkChannels(channelsToCheck : ChannelsToCheckInterface): Promise<CheckedChannelsInterface> {
        return await this.contentAgent.checkChannels(channelsToCheck.channelsToCheck)
    }
    async rewriteContent(channelsToRewrite : ChannelsToRewriteModel, prompt : PromptInterface) : Promise<RewriteContentResponseInterface> {
        const request = this.sendToRewriteConverter.convert(
            {link : this.config.get(SEND_TO_REWRITE_URL)},
            await this.contentAgent.getChannelsWithPosts(channelsToRewrite),
            prompt
        )
        return await this.rewriterClient.sendToRewrite(request)
    }
}
