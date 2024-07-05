import {TotalList} from "telegram/Helpers";
import {Api} from "telegram";

export interface MessageExtractorInterface {
    extract(message : TotalList<Api.Message>) : string[]
}