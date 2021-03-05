<template>
  <div style="height:100%">
    <base-list-view>
      <ms-dialog
        v-if="isShowDialog"
        headerPrimaryText="Thêm đơn"
        headerSecondaryText=" - Cập nhật chấm công"
        @closeDialog="isShowDialog = !isShowDialog"
      >
        <v-row slot="dialogContent" no-gutters>
          <v-col class="px-6 py-4 d-flex flex-column">
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">
                Người đề nghị <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <dx-select-box
                  placeholder=""
                  :search-enabled="true"
                  :data-source="products"
                  display-expr="name"
                  value-expr="id"
                />
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">Đơn vị công tác</div>
              <div class="input-wrap">
                <ms-input disabled="disabled"></ms-input>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">
                Ngày đề nghị <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <ms-input></ms-input>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">
                Ngày làm việc <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <ms-input></ms-input>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">
                Ca làm việc <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <dx-select-box
                  placeholder=""
                  :search-enabled="true"
                  :data-source="products"
                  display-expr="name"
                  value-expr="is"
                />
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">Giờ vào đầu ca</div>
              <div class="input-wrap">
                <ms-input
                  disabled="disabled"
                  iconRight="icon-right"
                  icon="icon-clock"
                ></ms-input>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">Giờ ra giữa ca</div>
              <div class="input-wrap">
                <ms-input
                  disabled="disabled"
                  iconRight="icon-right"
                  icon="icon-clock"
                ></ms-input>
              </div>
            </div>
          </v-col>
          <v-col class="px-6 py-4">
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">Giờ vào giữa ca</div>
              <div class="input-wrap">
                <ms-input
                  disabled="disabled"
                  iconRight="icon-right"
                  icon="icon-clock"
                ></ms-input>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">Giờ ra cuối ca</div>
              <div class="input-wrap">
                <ms-input
                  disabled="disabled"
                  iconRight="icon-right"
                  icon="icon-clock"
                ></ms-input>
              </div>
            </div>
            <div class="mb-4 d-flex">
              <div class="flex-grow-1 mr-8">
                Lý do cập nhật <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <ms-text-area></ms-text-area>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">
                Người duyệt <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <dx-select-box
                  placeholder=""
                  :search-enabled="true"
                  :data-source="products"
                  display-expr="name"
                  value-expr="id"
                />
              </div>
            </div>
            <div class="mb-4 d-flex">
              <div class="flex-grow-1 mr-8">
                Ghi chú
              </div>
              <div class="input-wrap">
                <ms-text-area></ms-text-area>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">
                Trạng thái <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <dx-select-box
                  placeholder=""
                  :search-enabled="true"
                  :data-source="products"
                  display-expr="name"
                  value-expr="id"
                />
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="d-flex" slot="dialogFooter">
          <ms-button class="mr-2" type="secondary" buttonText="Hủy"></ms-button>
          <ms-button type="primary" buttonText="Lưu"></ms-button>
        </div>
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
            v-if="isShowFilter"
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
      isShowDialog: false,

      products: [
        { name: "lua chon 1", id: 1 },
        { name: "lua chon 2", id: 2 },
        { name: "lua chon 3", id: 3 },
        { name: "lua chon 4", id: 4 },
        { name: "lua chon 5", id: 5 }
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

<style scoped>
.input-wrap {
  width: 241px;
}

.required-field {
  color: red;
}
</style>
