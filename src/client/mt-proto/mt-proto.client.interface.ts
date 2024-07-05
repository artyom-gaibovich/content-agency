import {ChannelToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {GetMessagesResponseInterface} from "./res/get-messages-response.interface";
import {ChannelToCheckInterface} from "../../customer-manager/model/channel-to-check.interface";
import {CheckedChannelModel} from "../../content-agent/checker/model/checked-channels.model";

export interface MtProtoClientInterface {
    getMessages(channelToRewriteModel : ChannelToRewriteModel) : Promise<GetMessagesResponseInterface>
    getAllMessages(channelsToRewrite: ChannelToRewriteModel[]) : Promise<GetMessagesResponseInterface[]>
    checkChannel(channelToCheck: ChannelToCheckInterface): Promise<CheckedChannelModel>
    checkChannels(channelsToCheck: ChannelToCheckInterface[]): Promise<CheckedChannelModel[]>

}