import { createUserSettingsInput } from './../utils/createUserSettingsInput';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSettingService } from 'src/users/userSettingService';
import { UserSetting } from '../models/UserSetting';

@Resolver()
export class UserSettingResolver {
  constructor(private userSettingService: UserSettingService) {}

  @Mutation((returns) => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: createUserSettingsInput,
  ) {
    const userSetting = await this.userSettingService.createUserSetting(
      createUserSettingsData,
    );
    return userSetting;
  }
}
