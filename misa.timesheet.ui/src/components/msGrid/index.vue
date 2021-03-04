<template>
  <div class="ms-grid">
    <v-simple-table height="calc(100vh - 124px)" fixed-header>
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
            v-for="(item, index) in desserts"
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
  </div>
</template>

<script>
export default {
  name: "MsGrid",
  data() {
    return {
      isCheckedAll: false,
      list: [],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ],
      headers: [
        "Người nộp đơn",
        "Người duyệt",
        "Ngày lập",
        "Ngày làm việc",
        "Ca làm việc",
        "Trạng thái"
      ]
    };
  },
  methods: {
    checkedAll() {
      this.isCheckedAll = !this.isCheckedAll;
      this.list = [];
      if (this.isCheckedAll) {
        for (let item of this.desserts) {
          this.list.push(item.name);
        }
      }
    },
    updateCheckedAll() {
      this.isCheckedAll =
        this.desserts.length === this.list.length ? true : false;
    }
  }
};
</script>

<style scoped>
.ms-grid {
  width: auto;
  height: 100%;
  background: green;
}
</style>
