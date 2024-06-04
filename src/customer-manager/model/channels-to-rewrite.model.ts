import {LinkModel} from "../../model/link/link.model";

export interface ChannelsToRewriteModel {
    links : LinkModel[]
    limit? : number
}