import {ChannelCheckerInterface} from "./channel.checker.interface";
import {CheckedChannelsModel} from "./model/checked-channels.model";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {Injectable} from "@nestjs/common";
import {FileManagerInterface} from "../../file-executor/file-manager.interface";


@Injectable()
export class ChannelChecker implements ChannelCheckerInterface {
    constructor(private fileManager: FileManagerInterface
    ) {
    }

    async checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelsModel> {
        return await this.fileManager.checkChannels(channelsToCheck)
    }
}