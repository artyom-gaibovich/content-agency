import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {
    GetPostsFromTelegramChannelInputModel
} from "../../../file/model/input/get-posts-from-telegram-channel.input.model";
import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../file/model/output/get-posts-from-telegram-channel.output.model";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";


export interface TelegramChannelRepositoryInterface{
    //Я ДУМЮ НАДО LINKINTERFACE ДЕЛАТЬ
    getPostsByChannelLink(channelLink : GetPostsFromTelegramChannelInputModel) : Promise<GetPostsFromTelegramChannelOutputModel>
    checkOneByChannelLink(channelLink : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel>
    getPostsManyChannels(channelLinks : GetPostsFromTelegramChannelInputModel[]) : Promise<GetPostsFromTelegramChannelOutputModel[]>

}