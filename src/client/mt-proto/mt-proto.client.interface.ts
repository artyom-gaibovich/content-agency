import {Api} from "telegram";
import {ChannelsToRewriteModel, ChannelToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {helpers} from "telegram";
import {GetMessagesResponseInterface} from "./res/get-messages-response.interface";

export interface MtProtoClientInterface {
    getMessages(channelToRewriteModel : ChannelToRewriteModel) : Promise<GetMessagesResponseInterface>
    getAllMessages(channelsToRewrite: ChannelToRewriteModel[]) : Promise<GetMessagesResponseInterface[]>
}