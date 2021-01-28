export interface User {
  id: number
  name: string
  email: string
  phone: string
  company: Company
  address: Address
}

export interface Company {
  name: string
}

export interface Address {
  city: string
  street: string
}