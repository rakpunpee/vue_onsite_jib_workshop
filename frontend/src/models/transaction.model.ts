export interface Transaction {
  _id: string;
  __v: number;
  total: number;
  paid: number;
  change: number;
  order_list: string;
  payment_type: string;
  payment_detail: string;
  staff_id: string;
  seller_id: string;
  buyer_id: string;
  timestamp: Date;
  transaction_id: number;
  subtotal?: number;
  discount?: number;
  shipping_cost?: number;
  tax_percent?: number;
  comment?: string;
}
