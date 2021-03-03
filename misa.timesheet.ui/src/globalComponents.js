import Vue from 'vue'

import mainLayout from '@/layouts/mainLayout';
Vue.component(mainLayout.name, mainLayout);

import msNavBar from '@/components/msNavbar';
Vue.component(msNavBar.name, msNavBar);

import msMenu from '@/components/msMenu';
Vue.component(msMenu.name, msMenu);

import msDropdown from '@/components/msDropdown';
Vue.component(msDropdown.name, msDropdown);

import msDropdownItem from '@/components/msDropdownItem';
Vue.component(msDropdownItem.name, msDropdownItem);

import msNavbarItem from '@/components/msNavbarItem';
Vue.component(msNavbarItem.name, msNavbarItem);

import msInput from '@/components/msInput';
Vue.component(msInput.name, msInput);

import msButton from '@/components/msButton';
Vue.component(msButton.name, msButton);

import baseListView from '@/components/baseListView';
Vue.component(baseListView.name, baseListView);

import baseContentArea from '@/components/baseContentArea';
Vue.component(baseContentArea.name, baseContentArea);