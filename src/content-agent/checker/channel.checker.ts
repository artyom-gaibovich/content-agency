import {ChannelCheckerInterface} from "./channel.checker.interface";
import {CheckedChannelModel, CheckedChannelsModel} from "./model/checked-channels.model";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {Inject, Injectable} from "@nestjs/common";
import {FILE_MANAGER, MT_PROTO_CLIENT} from "../../constants/di.constants";
import {MtProtoClientInterface} from "../../client/mt-proto/mt-proto.client.interface";


@Injectable()
export class ChannelChecker implements ChannelCheckerInterface {
    constructor(@Inject(MT_PROTO_CLIENT) private MTProtoClient: MtProtoClientInterface
    ) {
    }

    async checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelModel[]> {
        const result = await this.MTProtoClient.checkChannels(channelsToCheck)
        return result.map(channel => {
            return {
                channelLink : channel.channelLink,
                isChannelExists : channel.isChannelExists,
                status : channel.status,
            }
        }) as CheckedChannelModel[]
    }
}