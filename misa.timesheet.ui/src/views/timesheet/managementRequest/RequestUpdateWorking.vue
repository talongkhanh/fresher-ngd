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
          <ms-button
            @click.native="isShowDeleteDialog = !isShowDeleteDialog"
            class="mr-2"
            type="secondary"
            buttonText="Hủy"
          ></ms-button>
          <ms-button
            @click.native="handleBtnDeleteClick"
            type="danger"
            buttonText="Xóa"
          ></ms-button>
        </div>
      </ms-dialog>
      <!-- change dialog -->
      <ms-dialog
        style="z-index: 10 !important;"
        v-if="isShowChangeDialog"
        :headerPrimaryText="headerPrimaryText"
        width="415px"
        height="190px"
        @closeDialog="isShowChangeDialog = !isShowChangeDialog"
        ><v-row
          class="d-flex align-center ml-6 mt-6"
          slot="dialogContent"
          no-gutters
        >
          {{ dialogText }}
        </v-row>
        <div class="d-flex" slot="dialogFooter">
          <ms-button
            @click.native="isShowChangeDialog = !isShowChangeDialog"
            class="mr-2"
            type="secondary"
            buttonText="Hủy"
          ></ms-button>
          <ms-button
            class="mr-2"
            type="secondary"
            buttonText="Không lưu"
            @click.native="handleBtnCancelSaveClick"
          ></ms-button>
          <ms-button
            @click.native="handleBtnSaveClick"
            type="primary"
            buttonText="Lưu"
          ></ms-button>
        </div>
      </ms-dialog>

      <!-- add and edit dialog -->
      <ms-dialog
        v-if="isShowDialog"
        :headerPrimaryText="headerPrimaryText"
        :headerSecondaryText="headerSecondaryText"
        :divider="true"
        width="892px"
        height="583px"
        @closeDialog="handleCloseDialog"
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
                  :data-source="applicants"
                  display-expr="name"
                  value-expr="name"
                  v-model:value="request.applicant"
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
                  v-model="request.createdDate"
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
                  v-model="request.workingDate"
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
                  value-expr="name"
                  v-model:value="request.shift"
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
                <ms-text-area v-model="request.reasonUpdate"> </ms-text-area>
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
                  :data-source="approveders"
                  display-expr="name"
                  value-expr="name"
                  v-model:value="request.approveder"
                />
              </div>
            </div>
            <div class="mb-4 d-flex">
              <div class="flex-grow-1 mr-8">
                Ghi chú
              </div>
              <div class="input-wrap">
                <ms-text-area v-model="request.note"></ms-text-area>
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
                  :data-source="statusesFilter"
                  display-expr="name"
                  value-expr="name"
                  v-model:value="request.status"
                />
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="d-flex" slot="dialogFooter">
          <ms-button
            @click.native="handleCloseDialog"
            class="mr-2"
            type="secondary"
            buttonText="Hủy"
          ></ms-button>
          <ms-button
            @click.native="handleBtnSaveClick"
            type="primary"
            buttonText="Lưu"
          ></ms-button>
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
        @btnAddClick="handleBtnAddClick"
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
            @editRecord="handleEditRecord"
            @focusInput="focusInput"
            :totalRecord="totalRecord"
            :startRecord="startRecord"
            :endRecord="endRecord"
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
import EventBus from "@/EventBus.js";
export default {
  name: "RequestUpdateWorking",
  data() {
    return {
      isShowFilter: false,
      isShowDialog: false,
      isShowDeleteDialog: false,
      isShowChangeDialog: false,
      isShowMultipleDelete: false,
      isChange: false,
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
          applicant: "Tạ Long Khánh",
          approveder: "Trần Đức Toản",
          createdDate: "2020-01-01",
          workingDate: "2020-02-01",
          shift: "Ca sáng",
          status: "Chờ duyệt",
          id: "1"
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
      applicants: [
        { name: "Tạ Long Khánh", id: 1 },
        { name: "Nguyễn Quốc Đạt", id: 2 },
        { name: "Lê Hồng Phong", id: 3 },
        { name: "Lê Việt Hoàng", id: 4 },
        { name: "Trần Quốc Anh", id: 5 }
      ],
      approveders: [
        { name: "Trần Đức Toản", id: 1 },
        { name: "Nguyễn Hải Long", id: 2 },
        { name: "Vũ Thanh Thiên", id: 3 }
      ],
      statuses: [
        { name: "Tất cả", id: "", selected: true },
        { name: "Chờ duyệt", id: "1", selected: false },
        { name: "Đã duyệt", id: "2", selected: false },
        { name: "Từ chối", id: "3", selected: false }
      ],
      shifts: [
        { name: "Ca sáng", id: 1 },
        { name: "Ca chiều", id: 2 },
        { name: "Ca tối", id: 3 }
      ],
      request: {},
      requestOrigin: {},
      idDelete: null,
      role: null
    };
  },
  methods: {
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
      this.headerSecondaryText = "";
      this.dialogText = "Bạn có chắc chắn muốn xóa Đơn này không?";
      this.role = "singleDelete";
      this.idDelete = record.id;
    },
    handleDeleteRecords() {
      this.isShowDeleteDialog = true;
      this.headerPrimaryText = "Xóa đơn";
      this.headerSecondaryText = "";
      this.dialogText = "Bạn có chắc chắn muốn xóa những Đơn này không?";
      this.role = "multipleDelete";
    },
    handleEditRecord(record) {
      this.role = "edit";
      this.headerPrimaryText = "Sửa đơn";
      this.headerSecondaryText = " - Cập nhật chấm công";
      this.request = { ...record };
      this.requestOrigin = { ...record };
      this.isShowDialog = true;
    },

    handleBtnAddClick() {
      this.headerPrimaryText = "Thêm đơn";
      this.headerSecondaryText = " - Cập nhật chấm công";
      this.request = {};
      this.requestOrigin = {};
      this.role = "add";
      this.isShowDialog = true;
    },
    handleBtnSaveClick() {
      this.isShowChangeDialog = false;
      if (this.role == "add") {
        this.request.id = new Date().getTime();
        this.items.push(this.request);
        this.isShowDialog = false;
        this.request = {};
      } else if (this.role == "edit") {
        const index = this.items.findIndex(item => item.id == this.request.id);
        this.items = [
          ...this.items.slice(0, index),
          this.request,
          ...this.items.slice(index + 1)
        ];
        this.isShowDialog = false;
      }
    },
    handleBtnDeleteClick() {
      if (this.role == "singleDelete") {
        this.items = this.items.filter(item => item.id != this.idDelete);
        this.isShowDeleteDialog = false;
      } else if (this.role == "multipleDelete") {
        this.itemsSelected.forEach(itemSelected => {
          this.items = this.items.filter(item => item.id != itemSelected);
          EventBus.$emit("unSelect");
          this.isShowDeleteDialog = false;
        });
      }
    },
    handleCloseDialog() {
      this.isChange = !(
        JSON.stringify(this.request) === JSON.stringify(this.requestOrigin)
      );
      if (this.isChange) {
        this.headerPrimaryText = "Thông báo";
        this.dialogText =
          "Thông tin đã được thay đổi. Bạn có muốn lưu lại không?";
        this.isShowChangeDialog = true;
      } else {
        this.isShowDialog = false;
      }
    },
    handleBtnCancelSaveClick() {
      this.isShowChangeDialog = false;
      this.isShowDialog = false;
    }
  },
  computed: {
    statusesFilter() {
      return this.statuses.filter(status => {
        return status.id != "";
      });
    },
    totalRecord() {
      return this.items.length;
    },
    startRecord() {
      return 1;
    },
    endRecord() {
      return this.items.length;
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
