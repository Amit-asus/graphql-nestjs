import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//creating a graphql type
@Entity({ name: 'user_settings' })
@ObjectType()
export class UserSetting {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field({ defaultValue: false, nullable: false })
  receivedNotification: boolean;

  @Column()
  @Field({ nullable: false, defaultValue: 'false' })
  receiveEmails?: string;
}

//1 : 1 relationship with user
