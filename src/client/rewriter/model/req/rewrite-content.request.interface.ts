

//MODE_GEN ЭТО ENUM
import {LinkInterface} from "../../../../model/link/link.interface";

export interface RewriteContentRequestInterface {
    url : LinkInterface
    body : {
        request_text : string[]
        mode_gen : string
    }
}