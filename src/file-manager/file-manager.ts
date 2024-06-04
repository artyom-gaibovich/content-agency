import {FileManagerInterface} from "./file-manager.interface";
import {ChannelToCheckModel} from "../customer-manager/model/channel-to-check.model";
import {CheckedChannelModel} from "../content-agent/checker/model/checked-channels.model";
import {CheckChannelActionInterface} from "./actions/check-channel/check-channel.action.interface";
import {Inject, Injectable} from "@nestjs/common";
import {PathModel} from "../model/path/path.model";
import {LinkModel} from "../model/link/link.model";
import {ChannelsWithPostsModel} from "../content-agent/model/channel-with-posts.model";


//pathToFile: path.join(__dirname, '..', 'file', 'get-posts-from-telegram-channel.files.js')

@Injectable()
export class FileManager implements FileManagerInterface{
    constructor(@Inject('CHECK_CHANNEL_ACTION') private checkChannelAction : CheckChannelActionInterface) {
    }
    async checkChannel(channelToCheck: ChannelToCheckModel, pathToFile : PathModel): Promise<CheckedChannelModel> {
        return await this.checkChannelAction.run(channelToCheck, pathToFile)
    }
    async getChannels(channelLinks: LinkModel[]): Promise<ChannelsWithPostsModel> {
        return await this.c
    }
}