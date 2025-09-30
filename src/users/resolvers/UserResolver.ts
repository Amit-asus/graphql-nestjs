import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../../graphlql/models/User';
import { UserSetting } from '../../graphlql/models/UserSetting';
import { CreateUserInput } from '../../graphlql/utils/CreateUserInput';
import { UserService } from '../services/UserService';
import { UserSettingService } from '../services/userSettingService';

let incrementId = 11;
@Resolver((of) => UserSetting)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userServiceSetting: UserSettingService,
  ) {}

  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Mutation((returns) => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    const { username, displayName } = createUserData as User;
    const newUser = {
      username,
      displayName,
      id: ++incrementId,
    };
    await this.userService.createUser(newUser);
    return newUser;
  }

  @ResolveField((returns) => UserSetting, { name: 'setting', nullable: true })
  async getUserSettings(@Parent() user: User): Promise<UserSetting | null> {
    return await this.userServiceSetting.getUserSettingById(user.id);
  }
}
