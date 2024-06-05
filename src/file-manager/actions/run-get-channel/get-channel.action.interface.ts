import {ChannelWithPostsModel} from "../../../content-agent/model/channel-with-posts.model";
import {ChannelToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";
import {PathModel} from "../../../model/path/path.model";

export interface GetChannelActionInterface {
    run(channel: ChannelToRewriteModel, pathToFile: PathModel) : Promise<ChannelWithPostsModel>
}