export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: number;
    website: number;
    company: Company;
    posts: Posts[];
    totalcomments: number;
  }

 export interface Posts{
   userId: number;
   id: number;
   title: string;
   body: string;
   comments: number;
}

  interface  Address {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: Geo[];
 }

 interface  Geo {
    lat: number;
    lng: number;

 }

 interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
 }

 