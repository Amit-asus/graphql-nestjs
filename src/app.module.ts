import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphlql/models/User';
import { UsersModule } from './users/users.module';
import { UserSetting } from './graphlql/models/UserSetting';
import { UserSettingResolver } from './users/resolvers/UserSettingsResolver';

//this is registration of the graph ql module
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [User, UserSetting],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [UserSettingResolver, UserSettingResolver],
})
export class AppModule {}
