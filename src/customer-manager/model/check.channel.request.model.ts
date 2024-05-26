import {LinkInterface} from "../../model/link/link.interface";
import {IsString} from "class-validator";



export class CheckChannelRequestDto implements LinkInterface{
    @IsString()
    url : string;
}