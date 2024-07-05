export interface CheckedChannelInterface {
    status : string
    errorMessage? : string
    channelLink : string
    isChannelExists : boolean
}
export interface CheckedChannelsInterface {
    checkedChannels  : CheckedChannelInterface[]
}