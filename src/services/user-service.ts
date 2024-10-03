import { User } from "../models/user";

export class UserService {
  static updateUser(user: User): boolean {
    console.log(`Updating user: ${JSON.stringify(user)}`);
    return true;
  }

  static findByEmail(email: string): User | undefined {
    return undefined;
  }
}