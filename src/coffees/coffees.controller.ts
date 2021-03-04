import { Controller, Get, Param } from '@nestjs/common';

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
}
