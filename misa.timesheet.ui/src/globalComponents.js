import Vue from 'vue'

import DatePicker from 'vue2-datepicker';
Vue.component('date-picker', DatePicker)

import { DxSelectBox } from "devextreme-vue/select-box";
Vue.component('dx-select-box', DxSelectBox)

import { DxTooltip } from 'devextreme-vue/tooltip';
Vue.component('dx-tooltip', DxTooltip)

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

import msDropdownMenu from '@/components/msDropdownMenu';
Vue.component(msDropdownMenu.name, msDropdownMenu);

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

import msGrid from '@/components/msGrid';
Vue.component(msGrid.name, msGrid);

import msFilter from '@/components/msFilter';
Vue.component(msFilter.name, msFilter);

import msAdjustColumn from '@/components/msAdjustColumn';
Vue.component(msAdjustColumn.name, msAdjustColumn);

import msCheckbox from '@/components/msCheckbox';
Vue.component(msCheckbox.name, msCheckbox);

import msDialog from '@/components/msDialog';
Vue.component(msDialog.name, msDialog);

import msTextArea from '@/components/msTextArea';
Vue.component(msTextArea.name, msTextArea);