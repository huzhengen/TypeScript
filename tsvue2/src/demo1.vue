<template>
  <div>
    <div>{{x}}</div>

    <div>
      <button @click="minus">-</button>
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "demo1",
  data() {
    return {
      x: 0
    };
  },
  methods: {
    add() {
      let x: number = (this.x += 1);
      this.x = x;
    },
    minus() {
      this.x -= 1;
    }
  }
});
</script>



<style lang="sass" scoped>

</style>