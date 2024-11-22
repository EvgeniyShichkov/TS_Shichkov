import axios from 'axios'

enum Gender {
    Female = 'female',
    Male = 'male',
}

enum Color {
    Green = 'Green',
    Red = 'Red',
    Hazel = 'Hazel',
    Amber = 'Amber',
    White = 'White',
    Blue = 'Blue',
    Purple = 'Purple',
    Gray = 'Gray',
}

enum HairType {
    Curly = 'Curly',
    Wavy = 'Wavy',
    Kinky = 'Kinky',
}

enum StateCode {
    MS = 'MS',
    WI = 'WI',
    AL = 'AL',
    NV = 'NV',
}

enum CardType {
    Elo = 'Elo',
    KoreanExpress = 'Korean Express',
    Mastercard = 'Mastercard',
    DinersClubInternational = 'Diners Club International',
}

enum Currency {
    BRL = 'BRL',
    CAD = 'CAD',
    INR = 'INR',
    SEK = 'SEK',
    CNY = 'CNY',
}

enum Role {
    Admin = 'admin',
    Moderator = 'moderator',
}

type Hair = {
    color: Color
    type: HairType
}

type Coordinates = {
    lat: number
    lng: number
}

interface UserAddress {
    address: string
    city: string
    state: string
    stateCode: StateCode
    postalCode: string
    coordinates: Coordinates
    country: string
}

interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: CardType
    currency: Currency
    iban: string
}

interface Company {
    department: string
    name: string
    title: string
    address: UserAddress
}

interface Crypto {
    coin: string
    wallet: string
    network: string
}

interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: Gender
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: string
    weight: string
    eyeColor: Color
    hair: Hair
    ip: string
    address: UserAddress
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
    crypto: Crypto
    role: Role
}

interface Pagination {
    total: number
    skip: number
    limit: number
}

interface ResponseUsers extends Pagination {
    users: User
}

const fetchData = async (): Promise<ResponseUsers[]> => {
    const response = await axios.get<ResponseUsers[]>(
        'https://dummyjson.com/users'
    )
    const data = response.data
    return data
}
fetchData()
