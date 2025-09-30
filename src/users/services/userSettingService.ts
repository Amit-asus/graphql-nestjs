import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphlql/models/User';
import { UserSetting } from 'src/graphlql/models/UserSetting';
import { CreateUserInput } from 'src/graphlql/utils/CreateUserInput';
import { createUserSettingsInput } from 'src/graphlql/utils/createUserSettingsInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectRepository(UserSetting)
    private userSettingRepository: Repository<UserSetting>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUserSettingById(userId: number) {
    return this.userSettingRepository.findOneBy({ userId });
  }

  async createUserSetting(createUserSettingData: createUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingData.userId,
    });

    if (!findUser) {
      throw new Error('User not found');
    }

    const newUserSetting = this.userSettingRepository.create(
      createUserSettingData,
    );
    const savedSetting = await this.userSettingRepository.save(newUserSetting);

    findUser.setting = savedSetting;
    await this.userRepository.save(findUser);

    return savedSetting;
  }
}
