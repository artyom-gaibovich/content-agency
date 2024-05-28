import {IsString} from "class-validator";
import {LinkInterface} from "../../model/link/link.interface";

export class GetPostsFromChannelRequestModel implements LinkInterface{
    //@IsArray
    //@IsString({each : true}) //проверяю каждый элемент массив, что он является строкой
    @IsString()
    url : string
}