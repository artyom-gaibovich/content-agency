import {ChannelRepositoryInterface} from "./channel.repository.interface";
import {ChannelsWithPostsModel} from "../../model/channel-with-posts.model";
import {Inject, Injectable} from "@nestjs/common";
import {FileManagerInterface} from "../../../file-manager/file-manager.interface";
import {ChannelsToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";

@Injectable()
export class ChannelRepository implements ChannelRepositoryInterface {
    constructor(@Inject('FILE_MANAGER') private fileManager : FileManagerInterface) {

    }
    async findByLinks(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel> {
        return await this.fileManager.getChannels(channelsToRewrite)
    }
}