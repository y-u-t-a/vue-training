import { readonly, ref } from "vue"

interface State {
  key: string
  key2: string
}

const state = ref<State>({ key: 'value', key2: 'value2' })
const setState = (data: State) => {
  state.value = { ...state.value, ...data }
}

export const useStore = () => {
  return {
    state: readonly(state),
    setState,
  }
}