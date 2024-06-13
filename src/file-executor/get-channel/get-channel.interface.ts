import {ChannelToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {PathInterface} from "../../model/path/path.interface";
import {ChannelWithPostsModel} from "../../content-agent/model/channel-with-posts.model";

export interface GetChannelInterface {
    run(channel: ChannelToRewriteModel, pathToFile: PathInterface) : Promise<ChannelWithPostsModel>
}