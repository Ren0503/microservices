import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.DATABASE_URL}`),
    ClientsModule.register([
      {
        name: 'SOCIAL_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'social',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'cube-consumer',
          }
        }
      }
    ]),
    UsersModule,
  ],
})
export class AppModule {}
