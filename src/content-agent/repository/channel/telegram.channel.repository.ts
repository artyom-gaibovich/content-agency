import {TelegramChannelRepositoryInterface} from "./telegram.channel.repository.interface";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {Injectable} from "@nestjs/common";
import {
    GetPostsFromTelegramChannelInputModel
} from "../../../file/model/input/get-posts-from-telegram-channel.input.model";
import {
    GetPostsFromTelegramChannelOutputModel
} from "../../../file/model/output/get-posts-from-telegram-channel.output.model";
import {
    RunCheckTelegramChannelInterfaceAction
} from "../../action/run/check-telegram-channel-file/run.check.telegram.channel.interface.action";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";
import {
    RunGetPostsFromTelegramChannelFileInterfaceAction
} from "../../action/run/get-posts-from-telegram-channel-file/run.get-posts-from-telegram-channel-file.interface.action";
import {GetPostsManyChannelsInterfaceAction} from "../../action/get/get-posts-many-channels.interface.action";

@Injectable({

})
export class TelegramChannelRepository implements TelegramChannelRepositoryInterface {

    constructor(

        private runCheckTelegramChannelFileAction : RunCheckTelegramChannelInterfaceAction,
        private runGetPostsFromTelegramChannelFileAction : RunGetPostsFromTelegramChannelFileInterfaceAction,
        private getPostsManyChannelsInterfaceAction : GetPostsManyChannelsInterfaceAction
    ) {

    }

    //МНЕ КАЖЕТСЯ ЗДЕСЬ ДОЛЖЕН БЫТЬ БЫТЬ LinkInterface в передаваемом параметре
    async getPostsByChannelLink(channelLink : GetPostsFromTelegramChannelInputModel) : Promise<GetPostsFromTelegramChannelOutputModel> {
        return await this.runGetPostsFromTelegramChannelFileAction.run(channelLink)
    }
    async checkOneByChannelLink(channelLink : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel> {
        return await this.runCheckTelegramChannelFileAction.run(channelLink)
    }
    async getPostsManyChannels(channelLinks : GetPostsFromTelegramChannelInputModel[]) : Promise<GetPostsFromTelegramChannelOutputModel[]> {
        return await this.getPostsManyChannelsInterfaceAction.getPostsManyChannels(channelLinks)
    }

}