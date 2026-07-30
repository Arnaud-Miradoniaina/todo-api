import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiProperty({
        example: 'Apprendre NestJS',
        description: 'Titre du todo',
    })
    @IsString()
    @IsNotEmpty()
    title!: string;

}