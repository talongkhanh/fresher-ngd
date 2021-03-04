<template>
  <div style="height:100%">
    <base-list-view>
      <ms-dialog
        v-if="isShowDialog"
        headerPrimaryText="Thêm đơn"
        headerSecondaryText=" - Cập nhật chấm công"
        @closeDialog="isShowDialog = !isShowDialog"
      >
      </ms-dialog>
      <!--  -->
      <base-content-area
        :isShowDialog="isShowDialog"
        :isShowFilter="isShowFilter"
        :contentHeaderTitle="contentHeaderTitle"
        @toggleShowFilter="isShowFilter = !isShowFilter"
        @showDialog="isShowDialog = !isShowDialog"
      >
        <ms-dropdown
          id="choose-status"
          :data="statuses"
          class="m-l-50"
          slot="dropDown"
        >
          <li slot="dropdownContent" class="d-flex align-center custom-padding">
            <div>
              <span>
                Trạng thái:
              </span>
              <template v-for="(item, i) in statuses">
                <b :key="i" v-if="item.selected">
                  {{ item.name }}
                </b>
              </template>
            </div>
            <div class="ms-icon icon-chevron-down-black"></div>
          </li>
          <div slot="dropdownItem">
            <ms-dropdown-item
              v-for="(item, index) in statuses"
              :key="index"
              :item="item"
              class="d-flex align-center"
            >
              <template slot="dropdownItemContent">
                <div
                  class="ms-dropdown-link d-flex align-center"
                  :class="{ active: item.selected }"
                  @click="test(item)"
                >
                  {{ item.name }}
                </div>
              </template>
            </ms-dropdown-item>
          </div>
        </ms-dropdown>
        <div style="height: 100%;" slot="contentMain" class="d-flex">
          <ms-grid
            :headers="headers"
            :items="items"
            class="flex-grow-1"
          ></ms-grid>
          <ms-filter
            @closeFilter="isShowFilter = false"
            :items="headers"
            v-show="isShowFilter"
          ></ms-filter>
        </div>
      </base-content-area>
    </base-list-view>
  </div>
</template>

<script>
export default {
  name: "RequestUpdateWorking",
  data() {
    return {
      contentHeaderTitle: "Đơn cập nhật chấm công",
      statuses: [
        { name: "Tất cả", id: "*", selected: true },
        { name: "Chờ duyệt", id: "1", selected: false },
        { name: "Đã duyệt", id: "2", selected: false },
        { name: "Từ chối", id: "3", selected: false }
      ],
      items: [
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
      ],
      isShowFilter: false,
      isShowDialog: false
    };
  },
  methods: {
    test(item) {
      this.statuses.forEach(status => {
        status.selected = false;
      });
      item.selected = true;
    }
  }
};
</script>

<style scoped></style>
