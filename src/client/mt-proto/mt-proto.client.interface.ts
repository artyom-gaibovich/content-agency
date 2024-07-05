import {Api} from "telegram";
import {ChannelsToRewriteModel} from "../../customer-manager/model/channels-to-rewrite.model";
import {helpers} from "telegram";

export interface MtProtoClientInterface {
    getMessages(channelsToRewriteModel : ChannelsToRewriteModel) : Promise<helpers.TotalList<Api.Message>>
}