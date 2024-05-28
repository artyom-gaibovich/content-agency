import {
    GetPostsFromTelegramChannelInputModel
} from "../../../../file/model/input/get-posts-from-telegram-channel.input.model";
import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../../file/model/output/get-posts-from-telegram-channel.output.model";

export interface RunGetPostsFromTelegramChannelFileInterfaceAction{
    run(inputData : GetPostsFromTelegramChannelInputModel) : Promise<GetPostsFromTelegramChannelOutputModel>

}