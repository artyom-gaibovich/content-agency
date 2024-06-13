import {RewriterClientInterface} from "./rewriter.client.interface";
import {RewriteContentRequestInterface} from "./model/req/rewrite-content.request.interface";
import {RewriteContentResponseInterface} from "./model/res/rewrite-content.response.interface";
import axios, {AxiosResponse} from "axios";

export class RewriterClient implements RewriterClientInterface {
    async sendToRewrite(req: RewriteContentRequestInterface): Promise<RewriteContentResponseInterface> {
        const request: AxiosResponse<RewriteContentResponseInterface> = await axios.post(req.url.link, req.body)
        return request.data
    }
}