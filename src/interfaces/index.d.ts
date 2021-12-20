export interface IPost {
    id: string;
    title: string;
    status: "published" | "draft" | "rejected";
    category: { id: string };
    createdAt: string;
}
export interface ICarrier {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    country: string;
}
export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password?: string;
}

export interface IShipper {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    country: string;
}

export interface ICategory {
    id: string;
    title: string;
}