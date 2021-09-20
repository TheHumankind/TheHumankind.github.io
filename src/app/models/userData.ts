import { Order } from "./order";

export interface UserData {
    firstName: '',
    lastName: '',
    token: '',
    login: '',
    password: '',
    cart: [],
    favorites: [],
    orders: Order[]
}
