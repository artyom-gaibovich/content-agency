import {Module} from "@nestjs/common";
import {RewriterClient} from "./rewriter.client";
import {REWRITER_CLIENT} from "../../constants/di.constants";

@Module({
    providers : [
        {
            provide : REWRITER_CLIENT,
            useFactory: () => {
                return new RewriterClient()
            }
        }
    ],
    exports : [REWRITER_CLIENT]
})
export class RewriterClientModule {

}