import { defineComponent } from 'vue'
import { <%= camelCaseName %>Props } from './props'


export default defineComponent({
  name,

  props: <%= camelCaseName %>Props,

  emits: ['click'],

  setup() {
    return () => <button><%= pascalCaseName %></button>
  },
})
