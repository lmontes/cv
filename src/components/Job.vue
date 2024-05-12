<template>
  <div class="mb-4">

    <div class="text-xl text-slate-800">
      <a v-if="data.url" :href="data.url" target="_blank"> {{ $t(data.company) }} </a>
      <span v-else> {{ $t(data.company) }} </span>
    </div>

    <div class="flex flex-row mb-2">
      <div class="grow">
        <div class="text-slate-600">
          {{ $t(data.name) }}
        </div>
      </div>
      <div class="shrink">
        <div class="text-slate-600 text-md">
          {{ dtr(data.startDate) }} - {{ dtr(data.endDate) }}
        </div>
      </div>
    </div>

    <div class="pl-4">
      <ul
        class="list-disc list-outside text-justify text-slate-700 mb-2"
      >
        <li v-for="t in data.tasks" v-bind:key="t">
          <span v-html="$t(t)"></span>
        </li>
      </ul>
      <div class="flex flex-wrap gap-1">
        <span
          v-for="tag in data.tags.sort()"
          v-bind:key="tag"
          class="text-xs px-2 py-1 rounded-full bg-emerald-600 text-white"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {dateTranslate} from '../utils';

export default {
  name: "Job",
  props: {
    data: Object,
  },
  methods: {
    dtr: dateTranslate
  }
};
</script>
