<template>
  <div style="height:100%">
    <base-list-view>
      <!-- <ms-input></ms-input>
    <ms-input icon="icon-search"></ms-input>
    <ms-input icon="icon-search" hintText="Tìm kiếm"></ms-input>
    <ms-input
      iconRight="icon-right"
      icon="icon-search"
      hintText="Tìm kiếm"
    ></ms-input>
    <ms-input
      iconRight="icon-right"
      icon="icon-clock"
      disabled="true"
      disable="disable"
    ></ms-input>
    <div class="d-flex">
      <ms-button type="secondary" buttonText="Hủy"></ms-button>
      <ms-button type="primary" buttonText="Lưu"></ms-button>
      <ms-button icon="icon-filter"></ms-button>
      <ms-button icon="icon-add" type="primary" buttonText="Thêm"></ms-button>
    </div> -->
      <base-content-area :contentHeaderTitle="contentHeaderTitle">
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
        <div slot="contentMain">
          <ms-grid></ms-grid>
          <ms-filter></ms-filter>
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
      ]
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
