<template>
  <div>
    this is home {{ aaa }}
    <ComDemo></ComDemo>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import ComDemo from '@mono/com-demo/src/index.vue';

@Component({
  // components: {
  //   ComDemo,
  // },
})
export default class Home extends Vue {
  aaa = 111;
}
</script>
