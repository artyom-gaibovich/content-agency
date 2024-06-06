import {ChannelWithPostsModel} from "../../../content-agent/model/channel-with-posts.model";
import {ChannelToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";
import {PathInterface} from "../../../model/path/path.interface";

export interface GetChannelActionInterface {
    run(channel: ChannelToRewriteModel, pathToFile: PathInterface) : Promise<ChannelWithPostsModel>
}