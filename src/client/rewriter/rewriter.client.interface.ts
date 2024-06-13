import {RewriteContentRequestInterface} from "./model/req/rewrite-content.request.interface";
import {RewriteContentResponseInterface} from "./model/res/rewrite-content.response.interface";

export interface RewriterClientInterface {
    sendToRewrite(req : RewriteContentRequestInterface) : Promise<RewriteContentResponseInterface>
}