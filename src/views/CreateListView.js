import ListVue from "./ListView.vue";
import bus from "../utils/bus";

export default function createListView(name) {
  return {
    name: name,
    created() {
      bus.$emit("start:spinner");
      this.$store.dispatch("FETCH_LIST", this.$route.name).then(() => {
        bus.$emit("end:spinner");
      });
    },
    render(createElement) {
      return createElement(ListVue);
    }
  };
}
