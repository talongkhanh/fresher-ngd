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
            <th
              id="ms-adjust-column"
              style="width: 24px; padding-right: 0: position: relative;"
            >
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
            <th style="width: 24px; z-index: 1;">
              <ms-checkbox v-if="items.length > 0">
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
            <th></th>
          </tr>
        </thead>
        <tbody v-if="items.length > 0">
          <tr
            class="ms-grid-row"
            v-for="(item, index) in items"
            :key="index"
            :class="{ selected: list.indexOf(item.id) != -1 }"
          >
            <td></td>
            <td>
              <ms-checkbox>
                <input
                  @change="updateCheckedAll"
                  v-model="list"
                  :value="item.id"
                  type="checkbox"
                />
                <span class="checkmark"></span>
              </ms-checkbox>
            </td>
            <td>{{ item.applicant }}</td>
            <td>{{ item.approveder }}</td>
            <td>{{ formatDate(item.createdDate) }}</td>

            <td>{{ formatDate(item.workingDate) }}</td>
            <td>{{ item.shift }}</td>
            <td>{{ item.status }}</td>
            <td style="width: 128px;">
              <ms-button
                type="circle"
                class="mr-4"
                icon="icon-edit"
                id="btn-edit"
                @mouseenter.native="editVisible = !editVisible"
                @mouseleave.native="editVisible = !editVisible"
                @click.native="editRecord(item)"
              ></ms-button>
              <ms-button
                @click.native="deleteRecord(item)"
                type="circle"
                icon="icon-delete"
                id="btn-delete"
                @mouseenter.native="deleteVisible = !deleteVisible"
                @mouseleave.native="deleteVisible = !deleteVisible"
              >
              </ms-button>
              <dx-popover
                :visible="deleteVisible"
                target="#btn-delete"
                position="bottom"
              >
                Xóa
              </dx-popover>
              <dx-popover
                :visible="editVisible"
                target="#btn-edit"
                position="bottom"
              >
                Sửa
              </dx-popover>
            </td>
          </tr>
        </tbody>
        <tbody
          class="d-flex align-center justify-center"
          v-else
          style="height: calc(100vh - 249px);"
        >
          <div class="ms-grid-no-content">
            Không có dữ liệu
          </div>
        </tbody>
      </template>
    </v-simple-table>
    <div class="ms-grid-footer d-flex align-center px-4">
      <div class="ms-grid-footer-total-record ">
        Tổng số bản ghi: <b>{{ totalRecord }}</b>
      </div>
      <div class="ms-grid-footer-paginate ml-auto">
        <ms-dropdown id="choose-limit-page">
          <li slot="dropdownContent" class="d-flex align-center custom-padding">
            <template v-for="(item, index) in paginateItems">
              <b :key="index" v-if="item.selected">
                {{ item.limit }}
              </b>
            </template>
            <div class="ms-icon icon-chevron-down-black"></div>
          </li>
          <div slot="dropdownItem">
            <ms-dropdown-item
              v-for="(item, index) in paginateItems"
              :key="index"
              :item="item"
              class="d-flex align-center"
            >
              <template slot="dropdownItemContent">
                <div
                  :class="{ active: item.selected }"
                  @click="selectItem(item)"
                  class="ms-dropdown-link d-flex align-center"
                >
                  {{ item.limit }}
                </div>
              </template>
            </ms-dropdown-item>
          </div>
        </ms-dropdown>
      </div>
      <div class="ms-grid-show-record mx-6">
        Từ <b>{{ startRecord }}</b> đến <b>{{ endRecord }}</b> bản ghi
      </div>
      <div class="ms-grid-control-page">
        <ms-button icon="icon-prev-page" type="paging"> </ms-button>
        <ms-button icon="icon-next-page" type="paging"> </ms-button>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/EventBus.js";
import { formatDate } from "@/untils";

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
    },
    totalRecord: {
      type: [String, Number],
      default: 0
    },
    startRecord: {
      type: [String, Number],
      default: 0
    },
    endRecord: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      isCheckedAll: false,
      isShowAdjustColumn: false,
      list: [],
      paginateItems: [
        {
          limit: 15,
          selected: true
        },
        {
          limit: 25,
          selected: false
        },
        {
          limit: 50,
          selected: false
        },
        {
          limit: 100,
          selected: false
        }
      ],
      deleteVisible: false,
      editVisible: false
    };
  },
  methods: {
    checkedAll() {
      this.isCheckedAll = !this.isCheckedAll;
      this.list = [];
      if (this.isCheckedAll) {
        for (let item of this.items) {
          this.list.push(item.id);
        }
      }
      this.$emit("selectionChange", this.list);
    },
    updateCheckedAll() {
      this.isCheckedAll = this.items.length === this.list.length ? true : false;
      this.$emit("selectionChange", this.list);
    },
    checkClickOn(event) {
      if (!document.getElementById("ms-adjust-column")) return;
      if (!document.getElementById("ms-adjust-column").contains(event.target)) {
        this.isShowAdjustColumn = false;
      }
    },
    selectItem(item) {
      this.paginateItems.forEach(paginateItem => {
        paginateItem.selected = false;
      });
      item.selected = true;
    },
    deleteRecord(record) {
      this.$emit("deleteRecord", record);
    },
    editRecord(record) {
      this.$emit("editRecord", record);
      this.$emit("focusInput");
    },
    formatDate(d) {
      return formatDate(d);
    }
  },
  created() {
    window.addEventListener("click", this.checkClickOn);
    EventBus.$on("unSelect", () => {
      this.isCheckedAll = false;
      this.list = [];
      this.$emit("selectionChange", this.list);
    });
  },
  beforeDestroy() {
    window.removeEventListener("click", this.checkClickOn);
  }
};
</script>

<style scoped></style>
