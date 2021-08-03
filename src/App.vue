<template>
  <v-app>
    <UsersContainer />
  </v-app>
</template>

<script>
import UsersContainer from "./containers/Users";

export default {
  name: 'App',
  components: {
    UsersContainer
  }
}
</script>
