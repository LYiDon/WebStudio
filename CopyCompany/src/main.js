// 入口文件
import { _console } from 'hp-shared/base';

/**
 * 1.vue
 */
// app
import { createApp } from 'vue';
import App from '@/App.vue';
const app = createApp(App);
// router
import router from '@/router';
app.use(router);

/**
 * 2.UI框架
 */
import 'vant/lib/index.css';
import Vant from 'vant';
app.use(Vant);

/**
 * 3.其他全局挂载，全局组件、各种框架、挂载到window 等，部分全局挂载在 App.vue 中通过 $root 使用
 */
// 全局组件
import * as components from '@/components';
app.use(components);

/**
 * 4.全局样式，在其他框架的全局样式之后引用
 */
import '@/styles/index.scss';

/**
 * 5.vue实例挂载：
 */
app.mount('#app');

/**
 * 6.调试选项设置
 */
// 显示常用信息便于调试
_console.log('import.meta.env: ', import.meta.env);
