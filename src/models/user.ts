import { Address } from "./address";
import { PhoneNumber } from "./phone-number";

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: PhoneNumber;
  address?: Address;
}

