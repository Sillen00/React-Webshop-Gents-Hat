import { useEffect, useState } from 'react'
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
