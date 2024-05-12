<template>
  <div class="flex flex-row">
    <div class="grow">
      <div class="text-md text-slate-800 mb-2 pr-2">
        <a v-if="data.url" :href="data.url" target="_blank"> {{ $t(data.name) }} </a>
        <span v-else> {{ $t(data.name) }}</span>
      </div>
    </div>
    <div class="flex-none">
      <div class="text-md text-slate-500 text-md">
        {{ dtr(data.date) }}
      </div>
    </div>
  </div>
</template>

<script>
import {dateTranslate} from '../utils';

export default {
  name: "Achievement",
  props: {
    data: Object,
  },
  methods: {
    dtr: dateTranslate
  }
};
</script>
