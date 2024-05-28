import {RunCheckTelegramChannelFileConfigModel} from "./run.check.telegram.channel.file.config.model";

export class RunCheckTelegramChannelFileConfigAction {
    constructor(private configModel : RunCheckTelegramChannelFileConfigModel) {
    }
    getPath() {
        return this.configModel.pathToFile
    }

}