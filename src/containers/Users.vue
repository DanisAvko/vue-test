<template>
  <v-container>
    <div class="table">
      <v-btn
        class="float-right"
        @click="openAddUserDialog"
        color="primary"
      >
        Добавить
      </v-btn>
      <UserDataTable
        :headers="headers"
        :items="users"
      />
    </div>

    <AddUserDialog
      v-model="showAddUserDialog"
      :chief-list="users"
      @saveUser="saveUser"
    />
  </v-container>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Users",
  data() {
    return {
      showAddUserDialog: false,
      headers: [
        {
          text: 'Имя',
          value: 'name',
          sortable: true
        },
        {
          text: 'Телефон',
          value: 'number',
          sortable: true
        }
      ]
    }
  },
  computed: {
    ...mapState({
      users: state => state.users
    })
  },
  components: {
    UserDataTable: () => import("../components/UserDataTable"),
    AddUserDialog: () => import("../components/AddUserDialog")
  },
  methods: {
    openAddUserDialog() {
      this.showAddUserDialog = true
    },
    saveUser(item) {
      this.$store.commit('saveUser', item)
    }
  }
}
</script>
