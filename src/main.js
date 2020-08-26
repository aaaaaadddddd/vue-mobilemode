// 入口文件
import Vue from 'vue'

import app from './App.vue'

// Header - 顶部导航栏  :按需导入
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

// Tabbar - 底部选项卡
import './lib/mui/css/mui.min.css'



new Vue({
    el: "#app",
    render: c => c(app)
})