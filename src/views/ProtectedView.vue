<template>
  <div>
    <h1>[[ {{ username }} ]]</h1>
    <button @click="logout">Logout</button>
    <AppLink :to="{ name: 'invoices' }">
      <button>Invoices</button>
    </AppLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: window.user,
    };
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
