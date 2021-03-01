import Vue from 'vue'

import mainLayout from '@/layouts/mainLayout';
Vue.component(mainLayout.name, mainLayout);

import msNavBar from '@/components/msNavbar';
Vue.component(msNavBar.name, msNavBar);

import msMenu from '@/components/msMenu';
Vue.component(msMenu.name, msMenu);

import msNavbarItem from '@/components/msNavbarItem';
Vue.component(msNavbarItem.name, msNavbarItem);