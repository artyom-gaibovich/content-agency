import {ChannelWithPostsModel} from "../../../content-agent/model/channel-with-posts.model";
import {ChannelToRewrite} from "../../../customer-manager/model/channels-to-rewrite.model";

export interface RunGetChannelActionInterface {
    run(channel : ChannelToRewrite) : Promise<ChannelWithPostsModel>
}