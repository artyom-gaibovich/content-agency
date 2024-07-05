import {Api, helpers} from "telegram";
import {CHANNEL_NOT_FOUND} from "../../../constants/errors.constants";

export interface GetMessagesResponseInterface {
    channelLink : string
    message : helpers.TotalList<Api.Message> | typeof CHANNEL_NOT_FOUND
}