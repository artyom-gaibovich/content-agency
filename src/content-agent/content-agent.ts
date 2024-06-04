import {Inject, Injectable} from "@nestjs/common";
import {ContentAgentInterface} from "./content-agent.interface";
import {ChannelCheckerInterface} from "./checker/channel.checker.interface";
import {ChannelToCheckModel} from "../customer-manager/model/channel-to-check.model";
import {CheckedChannelsModel} from "./checker/model/checked-channels.model";
import {ChannelsToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {ChannelsWithPostsModel} from "./model/channel-with-posts.model";


@Injectable()
export class ContentAgent implements ContentAgentInterface{
    constructor(@Inject('CHANNEL_CHECKER') private checker : ChannelCheckerInterface) {
    }
    async checkChannels(channelsToCheck: ChannelToCheckModel[]) : Promise<CheckedChannelsModel> {
        return await this.checker.check(channelsToCheck)
    }
    async getChannelsWithPosts(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel> {
    }

}