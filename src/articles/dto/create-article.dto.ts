import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Title of the article',
  })
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description?: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'Content of the article',
  })
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
