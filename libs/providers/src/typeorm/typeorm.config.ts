import { config } from 'dotenv'
import { join } from 'path'
import { DataSource, DataSourceOptions } from 'typeorm'
import { ConfigService } from '@nestjs/config'
// migrations не РАБОТАЕт error: столбец t.schema не существует
config({ path: join(process.cwd(), '.env') })
const configService = new ConfigService()

const options = (): DataSourceOptions => {
	const url = configService.get('DATABASE_URL')
	if (!url) {
		throw new Error('Database URL is empty - URL-адрес базы данных пуст.')
	}

	return {
		url,
		type: 'postgres',
		schema: 'public',
		logging: configService.get('IS_PROD') === 'false',
		entities: [
			join(process.cwd(), 'dist', 'libs', 'entities', '**', '*.entity.{ts,js}'), // библиотека наших сущностей
		],
		migrations: [join(process.cwd(), 'migrations', '**', '*migration.ts')],
		migrationsRun: true, // при запуске проекта проверяется миграции
		metadataTableName: 'migrations',
	}
}

export const appDataSource = new DataSource(options())
