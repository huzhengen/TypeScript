<template>
  <div>
    <div>{{number}}</div>

    <div>
      <button>-</button>
      <button>+</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "demo1",
  data() {
    return {
      number: 0
    };
  }
};
</script>


<style lang="sass" scoped>

</style>