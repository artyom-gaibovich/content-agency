import {Module} from "@nestjs/common";
import {CONFIG, MT_PROTO_CLIENT, TELEGRAM_CLIENT} from "../../constants/di.constants";
import {MTProtoClient} from "./mt-proto.client";
import {TelegramClient} from "telegram";
import {StringSession} from "telegram/sessions";
import {ConfigModule} from "../../config/config.module";
import {ConfigInterface} from "../../config/config.interface";
import {API_HASH, API_ID, STRING_SESSION} from "../../constants/env.constants";

@Module({
    imports : [ConfigModule],
    providers : [
        {
            provide : TELEGRAM_CLIENT,
            useFactory : (configService : ConfigInterface) => {
                return new TelegramClient(new StringSession(configService.get(STRING_SESSION)), parseInt(configService.get(API_ID)), configService.get(API_HASH), {
                    timeout : 30,
                })
            },
            inject : [CONFIG]
        },
        {
            provide : MT_PROTO_CLIENT,
            useFactory: (telegramClient : TelegramClient) => {
                return new MTProtoClient(telegramClient)
            },
            inject : [TELEGRAM_CLIENT]
        }
    ],
    exports : [MT_PROTO_CLIENT]
})
export class MTProtoClientModule {

}