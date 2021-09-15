<template>
  <div>this is home {{ aaa }}</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
  aaa = 111;
}
</script>
