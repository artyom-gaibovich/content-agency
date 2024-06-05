import {LinkInterface} from "../../model/link/link.interface";


export interface ChannelToRewriteModel {
    link : LinkInterface
    limit? : number
}
export interface ChannelsToRewriteModel {
    channelsToRewrite : ChannelToRewriteModel[]
}