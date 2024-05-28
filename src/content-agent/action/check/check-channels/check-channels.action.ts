import {CheckChannelsRequestModel} from "../../../../customer-manager/model/request/check-channels.request.model";
import {
    CheckChannelsResponseModel,
    CheckedChannelInterface
} from "../../../../customer-manager/model/response/check-channels.response.model";
import {
    RunCheckTelegramChannelInterfaceAction
} from "../../run/check-telegram-channel-file/run.check.telegram.channel.interface.action";
import {CheckChannelsInterfaceAction} from "./check-channels.interface.action";

export class CheckChannelsAction implements CheckChannelsInterfaceAction{
    constructor(private channelChecker : RunCheckTelegramChannelInterfaceAction) {
    }
    private async * channelIterator(request : CheckChannelsRequestModel) {

        for (const link  of request.links) {
            const checkedChannel = await this.channelChecker.run(link)
            yield checkedChannel
        }
    }
    async checkChannels(request : CheckChannelsRequestModel): Promise<CheckChannelsResponseModel> {
        const checkedChannels : CheckedChannelInterface[] = []
        for await (const channelLink of  this.channelIterator(request)) {
            checkedChannels.push(channelLink)
        }
        return {
            checkedChannels : checkedChannels
        }
    }
}