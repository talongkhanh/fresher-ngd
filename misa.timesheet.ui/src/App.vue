<template>
  <v-app id="app">
    <main-layout>
      <ms-navbar class="d-flex align-center">
        <div class="ms-navbar--header">
          <div class="app-info d-flex align-center">
            <div class="box-app-menu"></div>
            <a href="#">
              <div class="logo">
                <div class="logo-img mx-auto">
                  <img src="./assets/img/logo.svg" />
                </div>
              </div>
            </a>
            <div class="logo-text">Chấm công</div>
          </div>
        </div>
        <div class="ms-con-items d-flex align-center">
          <ms-menu :menuItems="menuItems"> </ms-menu>
          <div class="d-flex align-center ml-auto mr-6">
            <ms-navbar-item>
              <div class="version">Beta 2.34</div>
            </ms-navbar-item>
            <ms-navbar-item>
              <div class="notification"></div>
            </ms-navbar-item>
            <ms-navbar-item>
              <div class="user-avatar"></div>
            </ms-navbar-item>
          </div>
        </div>
      </ms-navbar>
      <router-view></router-view>
    </main-layout>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      menuItems: [
        { name: "Tổng quan", hasDropdown: false, url: "/timesheet/dashboard" },
        {
          name: "Chấm công",
          hasDropdown: true,
          url: "/timesheet/timekeeping",
          subItems: [
            { name: "Bảng chấm công chi tiết", slug: "detail-timesheet" },
            {
              name: "Bảng chấm công tổng hợp",
              slug: "general-timesheet"
            },
            {
              name: "Dữ liệu máy chấm công",
              slug: "timekeepermarchine"
            }
          ]
        },
        {
          name: "Ca làm việc",
          hasDropdown: true,
          url: "/timesheet/timeworking",
          subItems: [
            { name: "Bảng phân ca tổng hợp", slug: "shift-general" },
            {
              name: "Danh sách ca",
              slug: "working-shift"
            },
            {
              name: "Danh sách phân ca chi tiết",
              slug: "shift-detail"
            }
          ]
        },
        {
          name: "Quản lý đơn",
          hasDropdown: true,
          url: "/timesheet/management-request",
          subItems: [
            { name: "Đơn xin nghỉ", slug: "attendance-watch" },
            { name: "Đề nghị cập nhật công", slug: "request-update-working" },
            { name: "Đề nghị công tác", slug: "mission-allowance" },
            { name: "Đơn làm thêm giờ", slug: "register-overtime" },
            { name: "Đơn đi muộn/Về sớm", slug: "late-in-early-out" },
            {
              name: "Bảng tổng hợp nghỉ phép",
              slug: "attendance-watch-summary"
            }
          ]
        },
        { name: "Báo cáo", hasDropdown: false, url: "/timesheet/report" },
        { name: "Thiết lập", hasDropdown: false, url: "/timesheet/setting" }
      ]
    };
  }
};
</script>

<style>
.v-application--wrap {
  z-index: 0 !important;
}
</style>
