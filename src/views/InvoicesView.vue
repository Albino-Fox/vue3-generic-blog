<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script>
import { onBeforeRouteLeave } from "vue-router";
export default {
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm("Sure?");
      if (!answer) return false;
    });
  },
};
</script>
