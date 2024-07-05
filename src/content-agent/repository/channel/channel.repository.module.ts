import {Module} from "@nestjs/common";
import {ChannelRepository} from "./channel.repository";
import {FileManagerInterface} from "../../../file-executor/file-manager.interface";
import {FileManagerModule} from "../../../file-executor/file-manager.module";
import {CHANNEL_REPOSITORY, FILE_MANAGER, MESSAGE_EXTRACTOR, MT_PROTO_CLIENT} from "../../../constants/di.constants";
import {MTProtoClientModule} from "../../../client/mt-proto/mt-proto.client.module";
import {MtProtoClientInterface} from "../../../client/mt-proto/mt-proto.client.interface";
import {MessageExtractorModule} from "../../extractor/message.extractor.module";
import {MessageExtractor} from "../../extractor/message.extractor";

@Module({
    imports : [MessageExtractorModule, FileManagerModule, MTProtoClientModule],
    providers : [
        {
            provide : CHANNEL_REPOSITORY,
            useFactory: (messageExtractor : MessageExtractor, MTProtoClient : MtProtoClientInterface, fileManager : FileManagerInterface) => {
                return new ChannelRepository(messageExtractor, MTProtoClient, fileManager)
            },
            inject : [MESSAGE_EXTRACTOR, MT_PROTO_CLIENT, FILE_MANAGER]
        }
    ],
    exports : [CHANNEL_REPOSITORY]
})
export class ChannelRepositoryModule {

}