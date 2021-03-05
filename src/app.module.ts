import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot({
    // type: 'postgres',
    type: 'mysql',
    host: '172.21.3.49',
    // port: 5432,
    port: 3306,
    // username: 'postgres',
    username: 'bean',
    // password: 'pass123',
    password: 'beandev@123',
    // database: 'postgres',
    database: 'nestjs',
    autoLoadEntities: true,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
