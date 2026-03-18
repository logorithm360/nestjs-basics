import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule,ConfigModule.forRoot({isGlobal: true}), DatabaseModule],
  
})
export class AppModule {}
