import {TelegramChannelRepository} from "./repository/channel/telegram.channel.repository";
import {Injectable} from "@nestjs/common";
import {CheckChannelsRequestModel} from "../customer-manager/model/request/check-channels.request.model";
import {CheckChannelsResponseModel} from "../customer-manager/model/response/check-channels.response.model";
import {ContentAgentInterface} from "./content-agent.interface";


@Injectable()
export class ContentAgent implements ContentAgentInterface{
    constructor(private telegramChannelRepository : TelegramChannelRepository) {
    }
    async checkChannels(request : CheckChannelsRequestModel) : Promise<CheckChannelsResponseModel> {
        return await this.telegramChannelRepository.checkChannels(request)
    }

}