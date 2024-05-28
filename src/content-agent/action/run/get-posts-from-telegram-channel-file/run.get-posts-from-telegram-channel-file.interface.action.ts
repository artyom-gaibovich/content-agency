import {RunFileInterfaceAction} from "../run.file.interface.action";
import {CheckTelegramChannelOutputModel} from "../../../../file/model/output/check-telegram-channel.output.model";
import {
    GetPostsFromTelegramChannelInputModel
} from "../../../../file/model/input/get-posts-from-telegram-channel.input.model";
import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../../file/model/output/get-posts-from-telegram-channel.output.model";

export interface RunGetPostsFromTelegramChannelFileInterfaceAction extends RunFileInterfaceAction{
    run(inputData : GetPostsFromTelegramChannelInputModel) : Promise<GetPostsFromTelegramChannelOutputModel>

}