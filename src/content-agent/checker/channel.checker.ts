import {ChannelCheckerInterface} from "./channel.checker.interface";
import {CheckedChannelModel, CheckedChannelsModel} from "./model/checked-channels.model";
import {FileManagerInterface} from "../../file-manager/file-manager.interface";
import {ChannelToCheckModel} from "../../customer-manager/model/channel-to-check.model";
import {Inject, Injectable} from "@nestjs/common";
import {PathModel} from "../../model/path/path.model";


@Injectable()
export class ChannelChecker implements ChannelCheckerInterface {
    constructor(private path : PathModel, private fileManager: FileManagerInterface
    ) {
    }

    private async* channelIterator(channelsToCheck: ChannelToCheckModel[]) {

        for (const link of channelsToCheck) {
            const checkedChannel = await this.fileManager.checkChannel(link, this.path)
            yield checkedChannel
        }
    }

    async check(channelsToCheck: ChannelToCheckModel[]): Promise<CheckedChannelsModel> {
        const checkedChannels: CheckedChannelModel[] = []
        for await (const channelToCheck of this.channelIterator(channelsToCheck)) {
            checkedChannels.push(channelToCheck)
        }
        return {
            checkedChannels: checkedChannels
        }
    }
}