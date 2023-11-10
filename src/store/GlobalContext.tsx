import React, { createContext, useEffect, useState } from 'react'

type GlobalContextType = {
  showSignupLoginDialog: boolean
  setGlobalContext: React.Dispatch<React.SetStateAction<GlobalContextType>>
}
export const globalContextState: GlobalContextType = {
  showSignupLoginDialog: false,
  setGlobalContext: () => {},
}
export const GlobalContext =
  createContext<GlobalContextType>(globalContextState)

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [globalContext, setGlobalContext] = useState(globalContextState)
  return (
    <GlobalContext.Provider
      value={{
        showSignupLoginDialog: globalContext.showSignupLoginDialog,
        setGlobalContext: setGlobalContext,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
