import {
    CheckChannelsRequestModel
} from "../../../customer-manager/model/request/check-channels/check-channels.request.model";
import {CheckChannelsResponseModel} from "../../../customer-manager/model/response/check-channels.response.model";
import {RewritePostsResponseModel} from "../../../customer-manager/model/response/rewrite-posts.response.model";
import {RewritePostsRequestModel} from "../../../customer-manager/model/request/get-posts/rewrite-posts.request.model";


export interface TelegramChannelRepositoryInterface{
    //Я ДУМЮ НАДО LINKINTERFACE ДЕЛАТЬ
    checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel>
    //getPostsManyChannels(channelLinks : GetPostsFromTelegramChannelInputModel[]) : Promise<GetPostsFromTelegramChannelOutputModel[]>
    //RewritePostsResponseModel - мне кажется здесь неправильное название, т.к. мы не переписываем в данном случае посты

    getChannelsWithPosts(request : RewritePostsRequestModel) : Promise<RewritePostsResponseModel>
}