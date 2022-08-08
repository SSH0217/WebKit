import { useState } from "react";

const Auth = ({onLogin}) => {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("123456");
    return (
    <div>
        <h3>Auth</h3>
        <form>
            <input type="email" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} placeholder="Email" required/>
            <input type="password" value={password} onChange={(e) => {setPassword(e.currentTarget.value)}} placeholder="Password" required/>
            <input type="submit" value="Login" onClick={(e) => {
                e.preventDefault();
                onLogin(email, password);
            }}/>
        </form>
    </div>
    )
}

export default Auth;