import {ChannelRepositoryInterface} from "./channel.repository.interface";
import {LinkModel} from "../../../model/link/link.model";
import {ChannelWithPostsModel} from "../../model/channel-with-posts.model";
import {Inject} from "@nestjs/common";
import {FileManagerInterface} from "../../../file-manager/file-manager.interface";
import {ChannelsToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";

export class ChannelRepository implements ChannelRepositoryInterface {
    constructor(@Inject('FILE_MANAGER') private fileManager : FileManagerInterface) {

    }
    async findByLinks(ChannelsToRewrite: ChannelsToRewriteModel): Promise<ChannelWithPostsModel> {
        return await this.fileManager.
    }
}