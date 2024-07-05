import {MessageExtractorInterface} from "./message.extractor.interface";
import {TotalList} from "telegram/Helpers";
import {Api, helpers} from "telegram";

export class MessageExtractor implements MessageExtractorInterface{
    extract(messages: helpers.TotalList<Api.Message>) {
        return messages.map(message => message.message)
    }
}