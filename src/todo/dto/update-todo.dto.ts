import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {

    @ApiPropertyOptional({
        example: true,
        description: 'Todo terminé ou non',
    })
    @IsOptional()
    @IsBoolean()
    completed?: boolean;

}