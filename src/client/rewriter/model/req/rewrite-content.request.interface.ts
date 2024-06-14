

//MODE_GEN ЭТО ENUM
import {LinkInterface} from "../../../../model/link/link.interface";

export interface RewriteContentRequestInterface {
    url : LinkInterface
    body : {
        request_texts : string[]
        mode_gen : string
    }
}