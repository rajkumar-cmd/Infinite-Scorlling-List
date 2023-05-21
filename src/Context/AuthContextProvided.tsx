import React from 'react'

type AuthContextType = {
  login: boolean;
  log: () => void;
};

export const AuthContext = React.createContext<AuthContextType>({
  login: false,
  log: () => {},
});

const AuthContextProvided = ({children}) => {
  const [seelogin,setSeelogin]=React.useState<boolean>(false);
  const log=()=>{
    setSeelogin(!seelogin);
    console.log(seelogin);
  }
  return (
    <AuthContext.Provider value={{login:seelogin,log:log}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvided