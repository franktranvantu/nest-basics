import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Flavor} from "./flavor.entity";

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn() // define id and auto increment
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @JoinTable()
  @ManyToMany(
    type => Flavor,
    flavor => flavor.coffees
  )
  flavors: string[];
}
