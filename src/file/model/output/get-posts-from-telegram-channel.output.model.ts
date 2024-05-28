import {OutputModel} from "./output.model";

export interface GetPostsFromTelegramChannelOutputModel extends OutputModel{
    outputData : string[]
    status : string,
    statusMessage: string,
}