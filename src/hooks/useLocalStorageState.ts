import { useEffect, useState } from 'react'

// The function takes an initial state,
// and a key for the local storage. It returns a tuple with the current state
// and a function to update it. When the value changes, the new value is saved
// to local storage.
export function useLocalStorageState<State>(initialState: State, key: string) {
  const [state, setState] = useState<State>(() => {
    const lsState = localStorage.getItem(key)
    if (lsState) {
      return JSON.parse(lsState)
    }
    return initialState
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState] as const
}
