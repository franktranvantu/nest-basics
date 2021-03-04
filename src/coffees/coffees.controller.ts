import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() pagination): string {
    const { limit, offset } = pagination;
    return `List of all coffees. Limit: ${limit}, offset: ${offset}.`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffee.`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee.`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee.`;
  }
}
