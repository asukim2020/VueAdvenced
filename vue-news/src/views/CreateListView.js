import ListView from '../views/ListView.vue'
import bus from '../utils/bus'

export default function createListView(name) {
  return {
    name,
    mounted() {
      bus.$emit('end:spinner')
    },
    render(h) {
      return h(ListView);
    },
  };
}