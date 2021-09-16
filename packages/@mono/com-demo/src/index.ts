import ComDemo from './index.vue';

ComDemo.install = (Vue, options?: any) => {
  Vue.component(ComDemo.name, ComDemo);
};

export default ComDemo;
