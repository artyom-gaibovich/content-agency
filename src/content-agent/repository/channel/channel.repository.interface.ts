import {ChannelsToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";
import {ChannelsWithPostsInterface} from "../../model/channel-with-posts.interface";

export interface ChannelRepositoryInterface {
    findByLinks(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsInterface>
}