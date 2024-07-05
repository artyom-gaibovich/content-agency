import {ChannelRepositoryInterface} from "./channel.repository.interface";
import {BadRequestException, Inject, Injectable} from "@nestjs/common";
import {ChannelsToRewriteModel} from "../../../customer-manager/model/channels-to-rewrite.model";
import {MESSAGE_EXTRACTOR, MT_PROTO_CLIENT} from "../../../constants/di.constants";
import {MtProtoClientInterface} from "../../../client/mt-proto/mt-proto.client.interface";
import {MessageExtractorInterface} from "../../extractor/message.extractor.interface";
import {NOT_FOUND} from "../../../constants/errors.constants";
import {ChannelsWithPostsInterface} from "../../model/channel-with-posts.interface";

@Injectable()
export class ChannelRepository implements ChannelRepositoryInterface {
    constructor(
        @Inject(MESSAGE_EXTRACTOR) private messageExtractor : MessageExtractorInterface,
        @Inject(MT_PROTO_CLIENT) private MTProtoClient : MtProtoClientInterface){

    }
    async findByLinks(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsInterface> {
        const result = await this.MTProtoClient.getAllMessages(channelsToRewrite.channelsToRewrite)
        if (!result) {
            throw new BadRequestException(NOT_FOUND)
        }
        return {
            channelsWithPosts : this.messageExtractor.extract(result)
        }
    }
}