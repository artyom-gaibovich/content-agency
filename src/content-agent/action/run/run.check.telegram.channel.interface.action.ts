import {RunFileInterfaceAction} from "./run.file.interface.action";
import {CheckTelegramChannelOutputModel} from "../../../file/model/output/check-telegram-channel.output.model";
import {CheckTelegramChannelInputModel} from "../../../file/model/input/check-telegram-channel.input.model";
import {PathInterface} from "../../../model/path/path.interface";


export interface RunCheckTelegramChannelInterfaceAction extends RunFileInterfaceAction {
    run(pathToFile : PathInterface, inputData : CheckTelegramChannelInputModel) : Promise<CheckTelegramChannelOutputModel>
}