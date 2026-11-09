export interface PageProps {
  backendUrl: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export const PRODUCT_CATEGORIES = [
  "Salad",
  "Beverages",
  "Desserts",
  "Starters",
  "Main Course",
  "Sides",
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export function isProductCategory(value: string): value is ProductCategory {
  return (PRODUCT_CATEGORIES as readonly string[]).includes(value);
}

export const ORDER_STATUSES = ["Processing", "Shipped", "Delivered"] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

export function isOrderStatus(value: string): value is OrderStatus {
  return (ORDER_STATUSES as readonly string[]).includes(value);
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  phone: string;
}

export interface Order {
  _id: string;
  items: OrderItem[];
  amount: number;
  address: Address;
  status: OrderStatus;
}
