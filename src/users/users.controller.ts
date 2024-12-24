import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  filteredUsers(@Query('role') role?: 'INTERN' | 'ADMIN') {
    return this.usersService.filteredusers(role);
  }

  @Get() // get users
  findAll(): string {
    return 'All Users';
  }

  @Get(':id') // get user by id
  findOne(@Param('id', ParseIntPipe) id: Number) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(
    @Body()
    user: {
      name: String;
      email: String;
      id: Number;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return user;
  }

  @Delete(':id') // get user by id
  delete(@Param('id', ParseIntPipe) id: Number) {
    return this.usersService.delete(+id);
  }
}
