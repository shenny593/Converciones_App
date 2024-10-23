import { createContext, useState } from 'react';

export const Context = createContext({
	loginData:{},
	setLoginData:()=>{},
});

export const ContextProvider = ({children})=>{
	const [loginData, setLoginData]=useState({});

	return (
		<Context.Provider value={{loginData, setLoginData}}>
			{children}
		</Context.Provider>
	);

};