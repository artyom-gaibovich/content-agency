export interface ChannelWithPostsInterface {
    channelLink : string
    posts? : string[]
    status? : string,
    errorMessage?: string,
}
export interface ChannelsWithPostsInterface {
    channelsWithPosts : ChannelWithPostsInterface[]
}