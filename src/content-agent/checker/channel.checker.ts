import {ChannelCheckerInterface} from "./channel.checker.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {Inject, Injectable} from "@nestjs/common";
import {MT_PROTO_CLIENT} from "../../constants/di.constants";
import {MtProtoClientInterface} from "../../client/mt-proto/mt-proto.client.interface";
import {CheckedChannelInterface} from "./model/checked-channels.interface";


@Injectable()
export class ChannelChecker implements ChannelCheckerInterface {
    constructor(@Inject(MT_PROTO_CLIENT) private MTProtoClient: MtProtoClientInterface
    ) {
    }

    async checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelInterface[]> {
        const result = await this.MTProtoClient.checkChannels(channelsToCheck)
        return result.map(channel => {
            return {
                channelLink : channel.channelLink,
                isChannelExists : channel.isChannelExists,
                status : channel.status,
            }
        }) as CheckedChannelInterface[]
    }
}