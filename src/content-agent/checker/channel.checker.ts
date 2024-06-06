import {ChannelCheckerInterface} from "./channel.checker.interface";
import {CheckedChannelsModel} from "./model/checked-channels.model";
import {FileManagerInterface} from "../../file-manager/file-manager.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {Injectable} from "@nestjs/common";


@Injectable()
export class ChannelChecker implements ChannelCheckerInterface {
    constructor(private fileManager: FileManagerInterface
    ) {
    }

    async checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelsModel> {
        return await this.fileManager.checkChannels(channelsToCheck)
    }
}