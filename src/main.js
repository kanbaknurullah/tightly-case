import { createApp } from 'vue';
import 'ant-design-vue/es/style';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';

createApp(App).use(Antd).use(router).mount('#app')
