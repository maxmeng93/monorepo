<template>
  <div>
    {{ title }}<br />
    这是一个组件示例
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'com-demo',
})
export default class ComDemo extends Vue {
  title = 'this is com-demo.';
}
</script>
