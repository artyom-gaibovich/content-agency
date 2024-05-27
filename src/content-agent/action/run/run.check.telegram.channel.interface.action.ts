import {RunFileInterfaceAction} from "./run.file.interface.action";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/find-telegram-channel.input.model";


export interface RunCheckTelegramChannelInterfaceAction extends RunFileInterfaceAction {
    run(inputData : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel>
}