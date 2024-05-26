import { Injectable } from '@nestjs/common';
import {
    TelegramChannelRepositoryInterface
} from "../content-agent/repository/channel/telegram.channel.repository.interface";
import {CustomerManagerInterface} from "./customer.manager.interface";
import {LinkInterface} from "../model/link/link.interface";
import {TelegramChannelRepository} from "../content-agent/repository/channel/telegram.channel.repository";
import {RunCheckTelegramChannelFileAction} from "../content-agent/action/run/run.check.telegram.channel.file.action";
import {
    RunCheckTelegramChannelFileConfigAction
} from "../content-agent/action/run/run.check.telegram.channel.file.config.action";
import path from "path";
import {CheckChannelRequestModel} from "./model/check.channel.request.model";
import {CheckChannelResponseModel} from "./model/check.channel.response.model";

@Injectable()
export class CustomerManager implements CustomerManagerInterface{
    constructor(private telegramChannelRepository : TelegramChannelRepositoryInterface) {
    }
    async checkChannel(request : CheckChannelRequestModel): Promise<CheckChannelResponseModel> {
        return await new TelegramChannelRepository(
            new RunCheckTelegramChannelFileAction(
                new RunCheckTelegramChannelFileConfigAction(
                    {
                        path : {
                            path : path.join(__dirname, 'file', 'check.telegram.channel.file.js')
                        },

                    }
                ))).checkOneByChannelLink(
            {
                channelLink : {
                    url : request.link.url
                }
            }
        ) as CheckChannelResponseModel
    }
}
