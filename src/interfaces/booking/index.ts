import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  status: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
}
