import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/graphlql/models/User';
import { UserSettingResolver } from 'src/graphlql/resolvers/UserSettingsResolver';
import { UserSettingService } from './userSettingService';
import { UserSetting } from 'src/graphlql/models/UserSetting';

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
