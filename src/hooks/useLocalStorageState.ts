import { useEffect, useState } from 'react'

// Loads data from Local Storage if key exists, otherwise creates key with initialData
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
