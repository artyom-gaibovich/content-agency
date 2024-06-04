import {LinkModel} from "../../model/link/link.model";


export interface ChannelToRewrite {
    link : LinkModel
    limit? : number
}
export interface ChannelsToRewriteModel {
    channelsToRewrite : ChannelToRewrite[]
}