import {Module} from "@nestjs/common";
import {ChannelChecker} from "./channel.checker";
import {CHANNEL_CHECKER, FILE_MANAGER, MT_PROTO_CLIENT} from "../../constants/di.constants";
import {MTProtoClientModule} from "../../client/mt-proto/mt-proto.client.module";
import {MtProtoClientInterface} from "../../client/mt-proto/mt-proto.client.interface";

@Module({
    imports : [MTProtoClientModule],
    providers : [
        {
            provide : CHANNEL_CHECKER,
            useFactory : (MTProtoClient : MtProtoClientInterface) => {
                return new ChannelChecker(MTProtoClient)
            },
            inject : [MT_PROTO_CLIENT]
        }
    ],
    exports : [CHANNEL_CHECKER]
})
export class ChannelCheckerModule {

}