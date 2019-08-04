import ListVue from "./ListView.vue";
import bus from "../utils/bus";

export default function createListView(name) {
  return {
    name: name,
    mounted() {
      bus.$emit("end:spinner");
    },
    render(createElement) {
      return createElement(ListVue);
    }
  };
}
