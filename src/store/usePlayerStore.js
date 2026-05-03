import { create } from 'zustand'

const usePlayerStore = create((set) => ({
  // core player data
  uuid: sessionStorage.getItem('uuid') || null,
  username: sessionStorage.getItem('username') || null,
  email: sessionStorage.getItem('email') || null,

  // game data — loaded from API on login
  balance: 0,
  reputation: 0,
  total_income: 0,
  total_expenses: 0,

  // setters
  setPlayer: (player) => set({ ...player }),
  setBalance: (balance) => set({ balance }),
  addBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
  subtractBalance: (amount) => set((state) => ({ balance: state.balance - amount })),
  setReputation: (reputation) => set({ reputation }),

  // call this on login to hydrate the whole store at once
  hydrate: (data) => set({ ...data }),

  // call this on logout to wipe everything
  reset: () => set({
    uuid: null,
    username: null,
    email: null,
    balance: 0,
    reputation: 0,
    total_income: 0,
    total_expenses: 0,
  })
}))

export default usePlayerStore