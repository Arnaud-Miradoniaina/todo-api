import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }
  //GET ALL
  @ApiOperation({ summary: 'Récupérer tous les Todos' })
  @ApiResponse({
    status: 200,
    description: 'Liste des Todos récupérée avec succès',
  })
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  //POST
  @ApiOperation({ summary: 'Créer un nouveau Todo' })
  @ApiResponse({
    status: 201,
    description: 'Todo créé avec succès',
  })
  @Post()
  create(
    @Body() createTodoDto: CreateTodoDto,
  ) {
    return this.todoService.create(createTodoDto);
  }

  //GET 1
  @ApiOperation({ summary: 'Récupérer un Todo spécifique' })
  @ApiParam({
    name: 'id',
    description: 'ID du Todo à récupérer',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Todo récupéré avec succès',
  })
  @ApiResponse({
    status: 404,
    description: 'Todo non trouvé',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(Number(id));
  }

  //PATCH
  @ApiOperation({ summary: 'Mettre à jour un Todo spécifique' })
  @ApiParam({
    name: 'id',
    description: 'ID du Todo à mettre à jour',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Todo mis à jour avec succès',
  })
  @ApiResponse({
    status: 404,
    description: 'Todo non trouvé',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(Number(id), updateTodoDto);
  }

  //DELETE
  @ApiOperation({ summary: 'Supprimer un Todo spécifique' })
  @ApiParam({
    name: 'id',
    description: 'ID du Todo à supprimer',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Todo supprimé avec succès',
  })
  @ApiResponse({
    status: 404,
    description: 'Todo non trouvé',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(Number(id));
  }
}
