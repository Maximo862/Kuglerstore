import {createContext} from 'react'
import { LoginReq, RegisterReq } from "../Api/Authrequest";

const Authcontext = createContext()

export function Authprovider({children}) {

async function Register(user) {
    const res = await RegisterReq(user)
    console.log("register res: ", res)
}

    
    return (
        <Authcontext.Provider value={{

        }}>
            {children}
        </Authcontext.Provider>
    )
}