import {CheckedChannelInterface} from "../../../../customer-manager/model/response/check-channels.response.model";
import {LinkInterface} from "../../../../model/link/link.interface";


export interface RunCheckTelegramChannelInterfaceAction {
    run(link : LinkInterface) : Promise<CheckedChannelInterface>
}