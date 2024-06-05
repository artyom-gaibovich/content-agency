import {RewriteContentRequestConverterInterface} from "./rewrite-content-request-converter.interface";
import {RewritePostsRequestModel} from "../customer-manager/model/request/get-posts/rewrite-posts.request.model";
import {ChannelsToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {Injectable} from "@nestjs/common";

@Injectable()
export class RewriteContentRequestConverter implements RewriteContentRequestConverterInterface {
    convert(request: RewritePostsRequestModel): ChannelsToRewriteModel {
        return {
            channelsToRewrite : request.links.map(link => {
                return {
                    limit : request.limit,
                    link : link,
                }
            })
        }
    }
}