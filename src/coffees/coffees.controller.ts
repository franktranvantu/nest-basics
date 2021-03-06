import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() res: any) {
    res.status(200).send('List of all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffee.`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body: any) {
    return body;
  }
}
