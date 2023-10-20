import { useState } from "react"

export const Login = (props: { user: string }) => {
    const [user, setUser] = useState('')

    return <div className="login-hello">
        <h1>Hello {props.user} from login</h1>
    </div>
}
