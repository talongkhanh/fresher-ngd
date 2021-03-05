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
            <th style="width: 24px; padding-right: 0: position: relative;">
              <button
                @click="isShowAdjustColumn = !isShowAdjustColumn"
                class="ms-icon icon-adjust-column"
              ></button>
              <ms-adjust-column
                :items="headers"
                v-if="isShowAdjustColumn"
                @closeAdjustColumn="isShowAdjustColumn = !isShowAdjustColumn"
              ></ms-adjust-column>
            </th>
            <th style="width: 24px; z-index: 0;">
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
            <td></td>
            <td>
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
      isShowAdjustColumn: false,
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
