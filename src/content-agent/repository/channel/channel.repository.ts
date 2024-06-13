import {ChannelRepositoryInterface} from "./channel.repository.interface";
import {ChannelsWithPostsModel} from "../../model/channel-with-posts.model";
import {Inject, Injectable} from "@nestjs/common";
import {ChannelsToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";
import {FileManagerInterface} from "../../../file-executor/file-manager.interface";
import {FILE_MANAGER} from "../../../constants/di.constants";

@Injectable()
export class ChannelRepository implements ChannelRepositoryInterface {
    constructor(@Inject(FILE_MANAGER) private fileManager : FileManagerInterface) {

    }
    async findByLinks(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel> {
        return await this.fileManager.getChannels(channelsToRewrite)
    }
}