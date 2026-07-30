import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id,
      },
    });

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }


  create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
      },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.findOne(id); // Check if the todo exists before updating
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Check if the todo exists before deleting
    return this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
