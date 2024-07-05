import {GetMessagesResponseInterface} from "../../client/mt-proto/res/get-messages-response.interface";
import {ChannelWithPostsInterface} from "../model/channel-with-posts.interface";


export interface MessageExtractorInterface {
    extract(messages : GetMessagesResponseInterface[]) : ChannelWithPostsInterface[]
}