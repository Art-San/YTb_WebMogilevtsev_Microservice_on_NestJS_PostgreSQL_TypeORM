import { ProvidersModule } from './../libs/providers/src/providers.module'
import { Module } from '@nestjs/common'

@Module({
	imports: [ProvidersModule],
})
export class AppModule {}
