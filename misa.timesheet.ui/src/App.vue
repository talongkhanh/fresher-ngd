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
          <ms-menu></ms-menu>
          <div class="d-flex align-center ml-auto mr-24">
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
    </main-layout>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
