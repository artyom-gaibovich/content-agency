import {Injectable} from '@nestjs/common';
import {CustomerManagerInterface} from "./customer.manager.interface";
import {TelegramChannelRepository} from "../content-agent/repository/channel/telegram.channel.repository";
import {LinkInterface} from "../model/link/link.interface";
import {CheckTelegramChannelOutputModel} from "../file/model/output/check-telegram-channel.output.model";


@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(private telegramChannelRepository : TelegramChannelRepository) {
    }
    async checkChannel(request : LinkInterface): Promise<CheckTelegramChannelOutputModel> {
        console.log(request)
        return await this.telegramChannelRepository.checkOneByChannelLink(
            {
                channelLink : {
                    url : request.url
                }
            }
        )
    }
}
