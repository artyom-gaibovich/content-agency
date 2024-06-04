import {CheckedChannelInterface} from "../../../../customer-manager/model/response/check-channels.response.model";
import {LinkModel} from "../../../../model/link/link.model";


export interface RunCheckTelegramChannelInterfaceAction {
    run(link : LinkModel) : Promise<CheckedChannelInterface>
}

