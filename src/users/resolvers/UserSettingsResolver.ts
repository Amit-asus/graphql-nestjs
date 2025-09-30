import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from 'src/graphlql/models/UserSetting';
import { createUserSettingsInput } from 'src/graphlql/utils/createUserSettingsInput';
import { UserSettingService } from 'src/users/services/userSettingService';

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
