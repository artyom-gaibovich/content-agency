import {TotalList} from "telegram/Helpers";
import {Api} from "telegram";
import {GetMessagesResponseInterface} from "../../client/mt-proto/res/get-messages-response.interface";
import {ChannelWithPostsModel} from "../model/channel-with-posts.model";



export interface MessageExtractorInterface {
    extract(messages : GetMessagesResponseInterface[]) : ChannelWithPostsModel[]
}