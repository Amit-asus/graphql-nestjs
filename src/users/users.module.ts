import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/UserResolver';
import { UserService } from './services/UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphlql/models/User';
import { UserSettingService } from './services/userSettingService';
import { UserSetting } from 'src/graphlql/models/UserSetting';
import { UserSettingResolver } from './resolvers/UserSettingsResolver';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  controllers: [],
  providers: [
    UserResolver,
    UserService,
    UserSettingResolver,
    UserSettingService,
  ],
  exports: [UserService, UserSettingService],
})
export class UsersModule {}
