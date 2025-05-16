import { createContext, useState } from 'react';

const SignContext = createContext();

export const SignProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        console.log('Logging in with:', username, password);
    };

    return (
        <SignContext.Provider
            value={{ username, setUsername, password, setPassword, login }}
        >
            {children}
        </SignContext.Provider>
    );
};

export default SignContext;
