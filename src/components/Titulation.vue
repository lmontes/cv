<template>
  <div>
    <div class="text-xl text-slate-800">
      <a v-if="title.url" :href="title.url" target="_blank"> {{ $t(title.name) }} </a>
      <span v-else> {{ $t(title.name) }} </span>
    </div>
    <div class="flex flex-row">
      <div class="grow">
        <div class="text-slate-600 pr-2">
          {{ title.institution }}
        </div>
      </div>
      <div class="shrink">
        <div class="text-slate-500 text-md">
          {{ dtr(title.startDate) }} - {{ dtr(title.endDate) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { dateTranslate } from '../utils';

export default {
  name: "Titulation",
  props: {
    title: Object,
  },
  methods: {
    dtr: dateTranslate
  }
};
</script>
