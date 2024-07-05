import {Inject, Injectable} from "@nestjs/common";
import {ContentAgentInterface} from "./content-agent.interface";
import {ChannelToCheckInterface} from "../customer-manager/model/channel-to-check.interface";
import {CheckedChannelInterface, CheckedChannelsInterface} from "./checker/model/checked-channels.interface";
import {ChannelsToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {ChannelRepositoryInterface} from "./repository/channel/channel.repository.interface";
import {CHANNEL_CHECKER, CHANNEL_REPOSITORY} from "../constants/di.constants";
import {ChannelCheckerInterface} from "./checker/channel.checker.interface";
import {ChannelsWithPostsInterface} from "./model/channel-with-posts.interface";


@Injectable()
export class ContentAgent implements ContentAgentInterface{
    constructor(
        @Inject(CHANNEL_CHECKER) private checker : ChannelCheckerInterface,
        @Inject(CHANNEL_REPOSITORY) private repository : ChannelRepositoryInterface,
    ) {
    }
    async checkChannels(channelsToCheck: ChannelToCheckInterface[]) : Promise<CheckedChannelsInterface> {
        const res = await this.checker.checkChannels(channelsToCheck)
        return {
            checkedChannels : res as CheckedChannelInterface[]
        }
    }
    async getChannelsWithPosts(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsInterface> {
        return await this.repository.findByLinks(channelsToRewrite)
    }

}