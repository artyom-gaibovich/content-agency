import {Inject, Injectable} from "@nestjs/common";
import {ContentAgentInterface} from "./content-agent.interface";
import {ChannelCheckerInterface} from "./checker/channel.checker.interface";
import {ChannelToCheckInterface} from "../customer-manager/model/channel-to-check.interface";
import {CheckedChannelsModel} from "./checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {ChannelsWithPostsModel} from "./model/channel-with-posts.model";
import {ChannelRepositoryInterface} from "./repository/channel/channel.repository.interface";


@Injectable()
export class ContentAgent implements ContentAgentInterface{
    constructor(
        @Inject('CHANNEL_REPOSITORY') private repository : ChannelRepositoryInterface,
        @Inject('CHANNEL_CHECKER') private checker : ChannelCheckerInterface
    ) {
    }
    async checkChannels(channelsToCheck: ChannelToCheckInterface[]) : Promise<CheckedChannelsModel> {
        const res = await this.checker.checkChannels(channelsToCheck)
        console.log(res)
        return res
    }
    async getChannelsWithPosts(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel> {
        console.log(this.repository)
        return await this.repository.findByLinks(channelsToRewrite)
    }

}