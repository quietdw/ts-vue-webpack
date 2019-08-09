<template>
  <div id="app">
    <div>{{number}}</div>
    <div>
      <button @click="add">+</button>
      <button @click="minus">-</button>
    </div>
  </div>
</template>
<script lang='ts'>
// import Vue from 'vue'

export default {
  name: "webpack-test",
  data() {
    return {
      number: 0
    };
  },
  methods: {
    add() {
      this.number += 1;
    },
    minus() {
      this.number -= 1;
    }
  }
};
// export default Vue.extend ({

// });
</script>

