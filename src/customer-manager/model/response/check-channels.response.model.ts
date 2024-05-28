import {LinkInterface} from "../../../model/link/link.interface";

export interface CheckedChannelInterface {
    status : string
    errorMessage? : string
    channelLink : string
    isChannelExists : boolean
}
export interface CheckChannelsResponseModel {
    checkedChannels  : CheckedChannelInterface[]
}