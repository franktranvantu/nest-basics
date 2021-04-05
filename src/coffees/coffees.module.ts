import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Coffee} from "./entities/coffee.entity";
import {Flavor} from "./entities/flavor.entity";
import {Event} from "../events/entities/event.entity";
import { COFFEE_BRANDS } from "./coffees.constant";

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService, {provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe']}],
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  exports: [CoffeesService]
})
export class CoffeesModule {}
