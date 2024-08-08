import React, {ReactNode, useEffect} from "react"
export interface User{
    _id?: string,
    name: string,
    email: string,
    password: string,
    country: Countries
}

export enum Countries {
    "USA" = "USA",
    "UK" = "UK",
    "Germany" = "Germany",
}

interface UserContextType{
    user: User | null,
    setUser: (user: User | null) => void
}

const initialContext = {
    user: null,
    setUser: () => {}
}

const UserContext = React.createContext<UserContextType>(initialContext)

interface Props {
    children : React.ReactNode
}

export const UserContextProvider = (props:Props) => {
    const [user, setUser] = React.useState<User | null>(null)

    useEffect(() => {
        // setUser(JSON.parse(localStorage.getItem('user') || 'null'))
        setUser({
            _id: '1',
            name: 'test',
            email: 'test',
            password: 'test',
            country: Countries.USA
        })
    }, [])

    return <UserContext.Provider value={{user, setUser}}>{props.children}</UserContext.Provider>
}