import {SendToRewriteRequestConverterInterface} from "./send-to-rewrite.request.converter.interface";
import {ChannelsWithPostsModel} from "../../../content-agent/model/channel-with-posts.model";
import {RewriteContentRequestInterface} from "../../../client/rewriter/model/req/rewrite-content.request.interface";
import {LinkInterface} from "../../../model/link/link.interface";

export class SendToRewriteRequestConverter implements SendToRewriteRequestConverterInterface{
    convert(link : LinkInterface, channelsWithPosts: ChannelsWithPostsModel, modeGen : string = 'PromptConnectText'): RewriteContentRequestInterface {
        return {
            url : link,
            body : {
                request_text : channelsWithPosts.channelsWithPosts.filter(chn=>chn.posts).map(chn => {
                        return chn.posts.join('\n')
                }),
                mode_gen : modeGen,
            }
        }
    }
}