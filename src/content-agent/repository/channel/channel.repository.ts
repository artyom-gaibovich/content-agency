import {ChannelRepositoryInterface} from "./channel.repository.interface";
import {ChannelsWithPostsModel} from "../../model/channel-with-posts.model";
import {BadRequestException, Inject, Injectable} from "@nestjs/common";
import {ChannelsToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";
import {FileManagerInterface} from "../../../file-executor/file-manager.interface";
import {FILE_MANAGER, MESSAGE_EXTRACTOR, MT_PROTO_CLIENT} from "../../../constants/di.constants";
import {MtProtoClientInterface} from "../../../client/mt-proto/mt-proto.client.interface";
import {MessageExtractorInterface} from "../../extractor/message.extractor.interface";

@Injectable()
export class ChannelRepository implements ChannelRepositoryInterface {
    constructor(
        @Inject(MESSAGE_EXTRACTOR) private messageExtractor : MessageExtractorInterface,
        @Inject(MT_PROTO_CLIENT) private MTProtoClient : MtProtoClientInterface,
        @Inject(FILE_MANAGER) private fileManager : FileManagerInterface) {

    }
    async findByLinks(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel> {
        const result = await this.MTProtoClient.getMessages(channelsToRewrite)
        if (!result) {
            throw new BadRequestException('NOT FOUND')
        }

        return {
            channelsWithPosts : [
                {
                    channelLink : channelsToRewrite.channelsToRewrite[0].link.link,
                    posts : this.messageExtractor.extract(result),
                }
            ]
        }
    }
}