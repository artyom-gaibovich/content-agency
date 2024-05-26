import {TelegramChannelRepositoryInterface} from "./telegram.channel.repository.interface";
import {LinkInterface} from "../../../model/link/link.interface";
import {TelegramChannelModel} from "../../model/channel/telegram.channel.model";
import {TelegramChannelLinkInterface} from "../../../model/link/telegram.channel.link.interface";
import path from "path";
import {RunCheckTelegramChannelFileAction} from "../../action/run/run.check.telegram.channel.file.action";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {RunCheckTelegramChannelFileConfigAction} from "../../action/run/run.check.telegram.channel.file.config.action";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";
import {Injectable} from "@nestjs/common";

@Injectable({

})
export class TelegramChannelRepository implements TelegramChannelRepositoryInterface {

    constructor(private runCheckTelegramChannelFileAction : RunCheckTelegramChannelFileAction) {
    }
    async checkOneByChannelLink(channelLink : CheckTelegramChannelInputModel) {
        console.log(channelLink)
        return await this.runCheckTelegramChannelFileAction.run(channelLink)
    }
}