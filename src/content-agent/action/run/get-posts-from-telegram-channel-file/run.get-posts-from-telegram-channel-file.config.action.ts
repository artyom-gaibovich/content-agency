import {RunGetPostsFromTelegramChannelFileConfigModel} from "./run.get-posts-from-telegram-channel-file.config.model";

export class RunGetPostsFromTelegramChannelFileConfigAction {
    constructor(private configModel : RunGetPostsFromTelegramChannelFileConfigModel) {
    }
    getPath() {
        return this.configModel.pathToFile
    }
    getInputData() {
        return this.configModel.inputData
    }
}