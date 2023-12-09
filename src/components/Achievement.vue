<template>
  <div class="flex flex-row">
    <div class="grow">
      <div class="text-lg text-slate-800 mb-2 pr-2">
        {{ $t(data.name) }}
      </div>
    </div>
    <div class="flex-none">
      <div class="test-lg text-slate-500 text-md">
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
