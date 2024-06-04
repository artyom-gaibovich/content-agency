import {LinkModel} from "../../../model/link/link.model";
import {ChannelWithPostsModel} from "../../model/channel-with-posts.model";
import {ChannelsToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";

export interface ChannelRepositoryInterface {
    findByLinks(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelWithPostsModel>
}