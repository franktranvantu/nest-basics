import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll(): string {
        return 'List of all coffees';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action return #${id} coffee.`;
    }

    @Post()
    create(@Body() body: any): any {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() body: any): string {
        return `This action updates #${id} coffee.`;
    }

    @Delete(':id')
    remove(@Param('id') id: number): string {
        return `This action removes #${id} coffee.`;
    }
}
