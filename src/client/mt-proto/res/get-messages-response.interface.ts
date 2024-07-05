import {Api, helpers} from "telegram";

export interface GetMessagesResponseInterface {
    channelLink : string
    message : helpers.TotalList<Api.Message> | '404_NOT_FOUND'
}