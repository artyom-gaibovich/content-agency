import {IsArray, IsNumber, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {RewritePostsRequestModel} from "./rewrite-posts.request.model";
import {LinkDto} from "../../../../model/link/link.dto";


export class RewritePostsRequestDto implements RewritePostsRequestModel{
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => LinkDto)
    links: LinkDto[];
    @IsNumber()
    limit : number
}