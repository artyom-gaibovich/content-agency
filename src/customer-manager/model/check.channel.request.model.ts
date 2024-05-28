import {LinkInterface} from "../../model/link/link.interface";
import {IsString} from "class-validator";



export class CheckChannelRequestModel implements LinkInterface{
    @IsString()
    url : string;
}