import {GetChannelsWithPostsInterfaceAction} from "./get-channels-with-posts.interface.action";
import {
    RunGetPostsFromTelegramChannelFileAction
} from "../run/get-posts-from-telegram-channel-file/run.get-posts-from-telegram-channel-file.action";
import {LinkInterface} from "../../../model/link/link.interface";
import {
    ChannelWithPostsModel,
    RewritePostsResponseModel
} from "../../../customer-manager/model/response/rewrite-posts.response.model";
import {RewritePostsRequestModel} from "../../../customer-manager/model/request/get-posts/rewrite-posts.request.model";

export class GetChannelsWithPostsAction implements GetChannelsWithPostsInterfaceAction {

    constructor(private runGetPostsFromTelegramChannelFileAction : RunGetPostsFromTelegramChannelFileAction) {
    }
    private async * channelIterator(links : LinkInterface[], limit : number = 10) {

        for (const link  of links) {
            const postsFromChannel = await this.runGetPostsFromTelegramChannelFileAction.run(link, limit)
            yield postsFromChannel
        }
    }
    async getChannelsWithPosts(request : RewritePostsRequestModel): Promise<RewritePostsResponseModel> {
        const channelsWithPosts : ChannelWithPostsModel[] = []
        for await (const channelWithPost of  this.channelIterator(request.links, request.limit)) {
            channelsWithPosts.push(channelWithPost)
        }
        return {
            channelsWithPosts : channelsWithPosts
        }
    }
}