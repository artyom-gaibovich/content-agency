import {ChannelToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {GetMessagesResponseInterface} from "./res/get-messages-response.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {CheckedChannelInterface} from "../../content-agent/checker/model/checked-channels.interface";

export interface MtProtoClientInterface {
    getMessages(channelToRewriteModel : ChannelToRewriteModel) : Promise<GetMessagesResponseInterface>
    getAllMessages(channelsToRewrite: ChannelToRewriteModel[]) : Promise<GetMessagesResponseInterface[]>
    checkChannel(channelToCheck: ChannelToCheckInterface): Promise<CheckedChannelInterface>
    checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelInterface[]>

}