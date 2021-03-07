<template>
  <div style="height:100%">
    <base-list-view>
      <!-- delete dialog -->

      <ms-dialog
        v-if="isShowDeleteDialog"
        :headerPrimaryText="headerPrimaryText"
        :headerSecondaryText="headerSecondaryText"
        width="415px"
        height="190px"
        @closeDialog="isShowDeleteDialog = !isShowDeleteDialog"
      >
        <v-row
          class="d-flex align-center ml-6 mt-6"
          slot="dialogContent"
          no-gutters
        >
          {{ dialogText }}
        </v-row>
        <div class="d-flex" slot="dialogFooter">
          <ms-button class="mr-2" type="secondary" buttonText="Hủy"></ms-button>
          <ms-button type="danger" buttonText="Xóa"></ms-button>
        </div>
      </ms-dialog>
      <!-- add dialog -->
      <ms-dialog
        v-if="isShowDialog"
        :headerPrimaryText="headerPrimaryText"
        :headerSecondaryText="headerSecondaryText"
        :divider="true"
        width="892px"
        height="583px"
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
                  ref="input"
                  placeholder=""
                  :search-enabled="true"
                  :data-source="shifts"
                  display-expr="name"
                  value-expr="id"
                  @selectionChanged="changeSelect"
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
                <date-picker
                  :lang="lang"
                  v-model="newRequest.createdDate"
                  type="date"
                  valueType="YYYY-MM-DD"
                  format="DD/MM/YYYY"
                ></date-picker>
              </div>
            </div>
            <div class="mb-4 d-flex align-center justify-space-between">
              <div class="flex-grow-1 mr-8">
                Ngày làm việc <span class="required-field">*</span>
              </div>
              <div class="input-wrap">
                <date-picker
                  :lang="lang"
                  v-model="newRequest.workingDate"
                  type="date"
                  valueType="YYYY-MM-DD"
                  format="DD/MM/YYYY"
                ></date-picker>
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
                  :data-source="shifts"
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
                  :data-source="shifts"
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
                  :data-source="statuses"
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
        :isShowMultipleDelete="isShowMultipleDelete"
        :items="itemsSelected"
        @toggleShowFilter="isShowFilter = !isShowFilter"
        @showDialog="showDialog"
        @focusInput="focusInput"
        @deleteRecords="handleDeleteRecords"
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
                  @click="selectItem(item)"
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
            @selectionChange="selectionChange"
            @deleteRecord="handleDeleteRecord"
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
import "vue2-datepicker/locale/vi";

export default {
  name: "RequestUpdateWorking",
  data() {
    return {
      isShowFilter: false,
      isShowDialog: false,
      isShowDeleteDialog: false,
      isShowMultipleDelete: false,
      contentHeaderTitle: "Đơn cập nhật chấm công",
      headerPrimaryText: "",
      dialogText: "",
      headerSecondaryText: "",
      itemsSelected: [],
      lang: {
        language: "vi",
        monthBeforeYear: true
      },
      items: [
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "1"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "2"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "3"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "4"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "5"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "6"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "7"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "8"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "9"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "10"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "11"
        },
        {
          applicants: "Tạ Long Khánh",
          approveder: "Nguyễn Quốc Đạt",
          createdDate: "2020-01-01",
          workingDate: "2020-01-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "12"
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

      statuses: [
        { name: "Tất cả", id: "*", selected: true },
        { name: "Chờ duyệt", id: "1", selected: false },
        { name: "Đã duyệt", id: "2", selected: false },
        { name: "Từ chối", id: "3", selected: false }
      ],
      shifts: [
        { name: "Ca sáng", id: 1 },
        { name: "Ca chiều", id: 2 },
        { name: "Ca tối", id: 3 }
      ],
      newRequest: {}
    };
  },
  methods: {
    showDialog() {
      this.headerPrimaryText = "Thêm đơn";
      this.headerSecondaryText = " - Cập nhật chấm công";
      this.isShowDialog = true;
    },
    selectItem(item) {
      this.statuses.forEach(status => {
        status.selected = false;
      });
      item.selected = true;
    },
    focusInput() {
      setTimeout(() => {
        this.$refs.input.$el.firstChild.lastChild.firstChild.firstChild.focus();
      }, 0);
    },
    // comboxbox change
    changeSelect(e) {
      console.log(e.selectedItem);
    },
    // grid row change
    selectionChange(list) {
      this.itemsSelected = list;
      if (list.length > 0) {
        this.isShowMultipleDelete = true;
      } else {
        this.isShowMultipleDelete = false;
      }
    },
    handleDeleteRecord(record) {
      this.isShowDeleteDialog = true;
      this.headerPrimaryText = "Cảnh báo";
      this.dialogText = "Bạn có chắc chắn muốn xóa Đơn này không?";
      console.log(record);
    },
    handleDeleteRecords() {
      this.isShowDeleteDialog = true;
      this.headerPrimaryText = "Xóa đơn";
      this.dialogText = "Bạn có chắc chắn muốn xóa những Đơn này không?";
      console.log(this.itemsSelected);
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
