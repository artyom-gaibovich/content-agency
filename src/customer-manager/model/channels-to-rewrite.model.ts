import {LinkModel} from "../../model/link/link.model";


export interface ChannelToRewriteModel {
    link : LinkModel
    limit? : number
}
export interface ChannelsToRewriteModel {
    channelsToRewrite : ChannelToRewriteModel[]
}