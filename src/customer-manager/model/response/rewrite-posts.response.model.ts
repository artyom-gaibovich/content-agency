import {LinkInterface} from "../../../model/link/link.interface";


export interface ChannelWithPostsModel {
    channelLink : string
    posts? : string[]
    status? : string,
    errorMessage?: string,
}
export interface RewritePostsResponseModel {
    channelsWithPosts : ChannelWithPostsModel[]
}