import * as React from "react" //Gets rid of TS error
import { createContext, useState } from "react";

interface globalState {
  theme: string,
  videoFile: any
}

// @ts-ignore
export const StateContext = createContext()

const StateContextProvider = (props: any) => {
  const [theme, setTheme] = useState('dracula')
  const [videoFile, setVideoFile] = useState()

  const state: globalState = {
    theme,
    videoFile
  }

  const actions = {
    setTheme,
    setVideoFile
  }

  return (
    <StateContext.Provider value={{state, actions}}>{props.children}</StateContext.Provider>
  )
}

export const useGlobalState = ():any => React.useContext(StateContext)

export default StateContextProvider