import { IPost } from './post.interface'
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util'

export class PostAggregate implements IPost {
	id: string = randomStringGenerator()
	title: string
	message: string
	authorId: string
	published = false
	createdAt = new Date().toISOString()
	updatedAt = new Date().toISOString()

	private constructor() {}
}

/**Второй урок 8:34 */
// Микросервис на NestJS обеспечивают более гибкую и модульную архитектуру приложения, что может быть особенно полезным в больших и сложных проектах. Они позволяют командам разработчиков разрабатывать, тестировать и масштабировать части приложения независимо друг от друга. микросервисов
