import {LinkInterface} from "../../../../model/link/link.interface";
import {ChannelWithPostsModel} from "../../../../customer-manager/model/response/rewrite-posts.response.model";

export interface RunGetPostsFromTelegramChannelFileInterfaceAction{
    run(link : LinkInterface) : Promise<ChannelWithPostsModel>
}