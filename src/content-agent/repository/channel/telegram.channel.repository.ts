import {TelegramChannelRepositoryInterface} from "./telegram.channel.repository.interface";
import {RunCheckTelegramChannelFileAction} from "../../action/run/run.check.telegram.channel.file.action";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {Injectable} from "@nestjs/common";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/find-telegram-channel.input.model";

@Injectable({

})
export class TelegramChannelRepository implements TelegramChannelRepositoryInterface {

    constructor(private runCheckTelegramChannelFileAction : RunCheckTelegramChannelFileAction) {
    }
    async checkOneByChannelLink(channelLink : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel> {
        return await this.runCheckTelegramChannelFileAction.run(channelLink)
    }

}