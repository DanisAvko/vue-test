<template>
  <v-dialog
    v-model="show"
    width="400px"
    persistent
  >
    <v-card>
      <v-card-title>
       <span>Добавление пользователя</span>
        <v-spacer/>
        <v-btn class="close-button" icon @click="closeDialog">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="name" label="Имя" outlined />
        <v-text-field v-model="number" label="Телефон" outlined />
        <v-select
          v-model="chief"
          :items="chiefList"
          label="Начальник"
          item-text="name"
          item-value="id"
          outlined
          clearable
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn color="primary" @click="saveUser">
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddUserDialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    chiefList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      name: '',
      number: '',
      chief: null
    }
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    saveUser() {
      const data = {
        id: Date.now(),
        name: this.name,
        number: this.number,
      }
      if (this.chief) data.chiefId = this.chief
      this.$emit('saveUser', data)
      this.closeDialog()
    },
    closeDialog() {
      this.name = ''
      this.number = ''
      this.chief = null
      this.show = false
    }
  }
}
</script>

<style scoped>
.close-button {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
