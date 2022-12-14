import { Module } from '@nestjs/common';
import { WebinarController } from './webinar.controller';
import { WebinarService } from './webinar.service';

@Module({
    imports: [],
    controllers: [WebinarController],
    providers: [WebinarService]
})
export class WebinarModule {}