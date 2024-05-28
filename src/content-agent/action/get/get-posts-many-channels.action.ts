import {GetPostsManyChannelsInterfaceAction} from "./get-posts-many-channels.interface.action";
import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../file/model/output/get-posts-from-telegram-channel.output.model";
import {
    RunGetPostsFromTelegramChannelFileAction
} from "../run/get-posts-from-telegram-channel-file/run.get-posts-from-telegram-channel-file.action";
import {LinkInterface} from "../../../model/link/link.interface";
import {
    GetPostsFromTelegramChannelInputModel
} from "../../../file/model/input/get-posts-from-telegram-channel.input.model";

export class GetPostsManyChannelsAction implements GetPostsManyChannelsInterfaceAction {

    constructor(private runGetPostsFromTelegramChannelFileAction : RunGetPostsFromTelegramChannelFileAction) {
    }
    private async * channelIterator(channelLinks : GetPostsFromTelegramChannelInputModel[]) {

        for (const channelLink  of channelLinks) {
            const postsFromChannel = await this.runGetPostsFromTelegramChannelFileAction.run(channelLink)
            yield postsFromChannel
        }
    }
    async getPostsManyChannels(channelLinks: GetPostsFromTelegramChannelInputModel[]): Promise<GetPostsFromTelegramChannelOutputModel[]> {
        const postsManyChannels : GetPostsFromTelegramChannelOutputModel[] = []
        for await (const channelLink of  this.channelIterator(channelLinks)) {
            postsManyChannels.push(channelLink)
        }
        return postsManyChannels
    }
}