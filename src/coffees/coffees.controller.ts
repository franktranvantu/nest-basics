import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'List of all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffee.`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
