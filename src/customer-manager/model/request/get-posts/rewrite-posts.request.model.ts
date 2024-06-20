import {LinkInterface} from "../../../../model/link/link.interface";
import {PromptInterface} from "../../../../model/prompt/prompt.interface";

export interface RewritePostsRequestModel {
    links : LinkInterface[]
    limit? : number
    prompt : string
}


