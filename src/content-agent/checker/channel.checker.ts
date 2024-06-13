import {ChannelCheckerInterface} from "./channel.checker.interface";
import {CheckedChannelsModel} from "./model/checked-channels.model";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {Inject, Injectable} from "@nestjs/common";
import {FileManagerInterface} from "../../file-executor/file-manager.interface";
import {FILE_MANAGER} from "../../constants/di.constants";


@Injectable()
export class ChannelChecker implements ChannelCheckerInterface {
    constructor(@Inject(FILE_MANAGER) private fileManager: FileManagerInterface
    ) {
    }

    async checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelsModel> {
        return await this.fileManager.checkChannels(channelsToCheck)
    }
}