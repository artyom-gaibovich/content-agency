import {Module} from "@nestjs/common";
import {ChannelRepository} from "./channel.repository";
import {CHANNEL_REPOSITORY, MESSAGE_EXTRACTOR, MT_PROTO_CLIENT} from "../../../constants/di.constants";
import {MTProtoClientModule} from "../../../client/mt-proto/mt-proto.client.module";
import {MtProtoClientInterface} from "../../../client/mt-proto/mt-proto.client.interface";
import {MessageExtractorModule} from "../../extractor/message.extractor.module";
import {MessageExtractor} from "../../extractor/message.extractor";

@Module({
    imports : [MessageExtractorModule, MTProtoClientModule],
    providers : [
        {
            provide : CHANNEL_REPOSITORY,
            useFactory: (messageExtractor : MessageExtractor, MTProtoClient : MtProtoClientInterface, fileManager : FileManagerInterface) => {
                return new ChannelRepository(messageExtractor, MTProtoClient)
            },
            inject : [MESSAGE_EXTRACTOR, MT_PROTO_CLIENT]
        }
    ],
    exports : [CHANNEL_REPOSITORY]
})
export class ChannelRepositoryModule {

}