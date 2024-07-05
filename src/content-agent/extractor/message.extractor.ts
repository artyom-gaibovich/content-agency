import {MessageExtractorInterface} from "./message.extractor.interface";
import {Api, helpers} from "telegram";
import {GetMessagesResponseInterface} from "../../client/mt-proto/res/get-messages-response.interface";
import {ChannelWithPostsModel} from "../model/channel-with-posts.model";

export class MessageExtractor implements MessageExtractorInterface{
    extract(messages : GetMessagesResponseInterface[]) {
        const result = messages.filter(msg => msg.message !== '404_NOT_FOUND')
        return result.map(msg => {
            return {
                channelLink : msg.channelLink,
                posts : (msg.message as helpers.TotalList<Api.Message>).map(msg=>msg.message).filter(msg => msg !== "")
            }
        }) as ChannelWithPostsModel[]
    }
}