import {PathInterface} from "../../../model/path/path.interface";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";
import {RunCheckTelegramChannelFileConfigModel} from "./run.check.telegram.channel.file.config.model";

export class RunCheckTelegramChannelFileConfigAction {
    constructor(private configModel : RunCheckTelegramChannelFileConfigModel) {
    }
    getPath() {
        return this.configModel.pathToFile
    }
    getInputData() {
        return this.configModel.inputData
    }
}