export interface CheckedChannelModel {
    status : string
    errorMessage? : string
    channelLink : string
    isChannelExists : boolean
}
export interface CheckedChannelsModel {
    checkedChannels  : CheckedChannelModel[]
}