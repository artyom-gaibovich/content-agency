import {LinkInterface} from "../../../../model/link/link.interface";

export interface RewritePostsRequestModel {
    links : LinkInterface[]
    limit? : number
}


