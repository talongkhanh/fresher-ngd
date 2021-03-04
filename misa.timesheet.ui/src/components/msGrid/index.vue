<template>
  <div class="ms-grid">
    <v-simple-table
      style="border-radius: 0"
      height="calc(100vh - 201px)"
      fixed-header
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="d-flex align-center justify-center">
              <ms-checkbox>
                <input
                  v-model="isCheckedAll"
                  @click="checkedAll"
                  type="checkbox"
                />
                <span class="checkmark"></span>
              </ms-checkbox>
            </th>
            <th
              v-for="(header, index) in headers"
              :key="index"
              class="text-left ms-grid-header"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="ms-grid-row"
            v-for="(item, index) in items"
            :key="index"
            :class="{ selected: list.indexOf(item.name) != -1 }"
          >
            <td class="d-flex align-center justify-center">
              <ms-checkbox>
                <input
                  @change="updateCheckedAll"
                  v-model="list"
                  :value="item.name"
                  type="checkbox"
                />
                <span class="checkmark"></span>
              </ms-checkbox>
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>

            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="grid-footer"></div>
  </div>
</template>

<script>
export default {
  name: "MsGrid",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isCheckedAll: false,
      list: []
    };
  },
  methods: {
    checkedAll() {
      this.isCheckedAll = !this.isCheckedAll;
      this.list = [];
      if (this.isCheckedAll) {
        for (let item of this.items) {
          this.list.push(item.name);
        }
      }
    },
    updateCheckedAll() {
      this.isCheckedAll = this.items.length === this.list.length ? true : false;
    }
  }
};
</script>

<style scoped></style>
