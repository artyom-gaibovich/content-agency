import {IsArray, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {CheckChannelsRequestModel} from "./check-channels.request.model";
import {LinkDto} from "../../../model/link/link.dto";


export class CheckChannelsRequestDto implements CheckChannelsRequestModel{
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LinkDto)
    links: LinkDto[];
}