import {FileManagerInterface} from "./file-manager.interface";
import {ChannelToCheckModel} from "../customer-manager/model/channel-to-check.model";
import {CheckedChannelModel, CheckedChannelsModel} from "../content-agent/checker/model/checked-channels.model";
import {CheckChannelActionInterface} from "./actions/check-channel/check-channel.action.interface";
import {Inject, Injectable} from "@nestjs/common";
import {PathInterface} from "../model/path/path.interface";
import {ChannelsWithPostsModel, ChannelWithPostsModel} from "../content-agent/model/channel-with-posts.model";
import {ChannelsToRewriteModel, ChannelToRewriteModel} from "../customer-manager/model/channels-to-rewrite.model";
import {GetChannelActionInterface} from "./actions/run-get-channel/get-channel.action.interface";
import {FileManagerConfigInterface} from "./file-manager.config.interface";


//pathToFile: path.join(__dirname, '..', 'file', 'get-posts-from-telegram-channel.files.js')

@Injectable()
export class FileManager implements FileManagerInterface{
    constructor(
        @Inject('FILE_MANAGER_CONFIG') private config : FileManagerConfigInterface,
        @Inject('CHECK_CHANNEL_ACTION') private checkChannelAction : CheckChannelActionInterface,
        @Inject('GET_CHANNEL_ACTION') private getChannelAction : GetChannelActionInterface,
    ) {
    }


    private async* checkChannelsIterator(channelsToCheck: ChannelToCheckModel[]) {

        for (const channelToCheck of channelsToCheck) {
            const checkedChannel = await this.checkChannelAction.run(channelToCheck, this.config.checkChannel)
            yield checkedChannel
        }
    }

    async checkChannels(channelsToCheck: ChannelToCheckModel[]): Promise<CheckedChannelsModel> {
        const checkedChannels: CheckedChannelModel[] = []
        for await (const channelToCheck of this.checkChannelsIterator(channelsToCheck)) {
            checkedChannels.push(channelToCheck)
        }
        return {
            checkedChannels: checkedChannels
        }
    }



    private async * getChannelsIterator(channelsToRewrite : ChannelToRewriteModel[]) {

        for (const channelToRewrite  of channelsToRewrite) {
            const postsFromChannel = await this.getChannelAction.run(channelToRewrite, this.config.getChannelsPath)
            yield postsFromChannel
        }
    }
    async getChannels(channelsToRewrite : ChannelsToRewriteModel) : Promise<ChannelsWithPostsModel> {
        const channelsWithPosts : ChannelWithPostsModel[] = []
        for await (const channelLink of  this.getChannelsIterator(channelsToRewrite.channelsToRewrite)) {
            channelsWithPosts.push(channelLink)
        }
        return {
            channelsWithPosts : channelsWithPosts
        }
    }
}