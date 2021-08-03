<template>
  <el-table
    :data="transformItems"
    row-key="id"
    expand-row-keys="id"
    :tree-props="{ children: 'children' }"
  >
    <template v-for="header in headers">
      <el-table-column
        :key="header.value"
        :label="header.text"
        :prop="header.value"
        :sortable="header.sortable"
      />
    </template>
  </el-table>
</template>

<script>
export default {
  name: "UsersDataTable",
  props: {
    headers: {
      type: Array,
      default: []
    },
    items: {
      type: Array,
      default: []
    }
  },
  computed: {
    transformItems() {
      const items = []
      this.items.forEach(item => items.push({ ...item }))
      const withoutChief = items.filter(item => !item.chiefId)

      const recurFunc = (arr) => {
        arr.forEach(item => {
          item.children = []
          items.slice().forEach((el, i) => {
            if (el.chiefId === item.id) {
              item.children.push(el)
              items.splice(i, 1)
            }
          })
          if (items.length !== 0) recurFunc(item.children)
        })
      }

      recurFunc(withoutChief)

      return withoutChief
    }
  }
}
</script>
