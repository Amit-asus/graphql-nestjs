import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class createUserSettingsInput {
  @Field((type) => Int)
  userId: number;

  @Field({ nullable: true })
  receivedNotification: boolean;

  @Field({ nullable: true })
  receiveEmails: boolean;
}
