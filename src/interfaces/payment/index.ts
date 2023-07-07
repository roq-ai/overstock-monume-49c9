import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  transaction_id: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  transaction_id?: string;
  user_id?: string;
}
