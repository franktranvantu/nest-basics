import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // type: 'mysql',
      host: 'localhost',
      // host: '172.21.3.49',
      port: 5432,
      // port: 3306,
      username: 'postgres',
      // username: 'bean',
      password: 'frank',
      // password: 'beandev@123',
      database: 'nestjs',
      // database: 'nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoffeesModule,
    CoffeeRatingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
