import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn() // define id and auto increment
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  // @Column('json', { nullable: true })
  // flavors: string[];
}
