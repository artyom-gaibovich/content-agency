import {TelegramChannelRepositoryInterface} from "./telegram.channel.repository.interface";
import {LinkInterface} from "../../../model/link/link.interface";
import {TelegramChannelModel} from "../../model/channel/telegram.channel.model";
import {TelegramChannelLinkInterface} from "../../../model/link/telegram.channel.link.interface";
import path from "path";
import {RunCheckTelegramChannelFileAction} from "../../action/run/run.check.telegram.channel.file.action";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";

export class TelegramChannelRepository implements TelegramChannelRepositoryInterface {

    async checkOneByChannelLink(channelLink : TelegramChannelLinkInterface) {
        return await new RunCheckTelegramChannelFileAction()
            .run({path : path.join(__dirname, 'file', 'check.telegram.channel.file.js')}
                , {channelLink : {url : 'https://t.me/habr_media'}}) as CheckTelegramChannelOutputModel
    }
}