import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {
    GetPostsFromTelegramChannelInputModel
} from "../../../file/model/input/get-posts-from-telegram-channel.input.model";
import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../file/model/output/get-posts-from-telegram-channel.output.model";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";
import {CheckChannelsRequestModel} from "../../../customer-manager/model/request/check-channels.request.model";
import {CheckChannelsResponseModel} from "../../../customer-manager/model/response/check-channels.response.model";


export interface TelegramChannelRepositoryInterface{
    //Я ДУМЮ НАДО LINKINTERFACE ДЕЛАТЬ
    checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel>

    getPostsByChannelLink(channelLink : GetPostsFromTelegramChannelInputModel) : Promise<GetPostsFromTelegramChannelOutputModel>
    getPostsManyChannels(channelLinks : GetPostsFromTelegramChannelInputModel[]) : Promise<GetPostsFromTelegramChannelOutputModel[]>

}