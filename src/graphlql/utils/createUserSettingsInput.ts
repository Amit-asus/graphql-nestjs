import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class createUserSettingsInput {
  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true })
  receiveNotification: number;

  @Field({ nullable: true })
  receiveEmail: number;
}
