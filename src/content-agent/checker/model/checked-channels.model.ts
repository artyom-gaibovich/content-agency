export interface CheckedChannelInterface {
    status : string
    errorMessage? : string
    channelLink : string
    isChannelExists : boolean
}
export interface CheckedChannelsModel {
    checkedChannels  : CheckedChannelInterface[]
}