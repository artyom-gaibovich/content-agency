import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../file/model/output/get-posts-from-telegram-channel.output.model";
import {
    GetPostsFromTelegramChannelInputModel
} from "../../../file/model/input/get-posts-from-telegram-channel.input.model";


export interface GetPostsManyChannelsInterfaceAction {
    getPostsManyChannels(channelLinks : GetPostsFromTelegramChannelInputModel[]) : Promise<GetPostsFromTelegramChannelOutputModel[]>
}