<template>
  <div class="flex bg-slate-300 place-items-center mb-4">
    <div class="flex-none">
      <div class="ml-16 mr-8">
        <img class="h-32 rounded-full" :src="data.image" />
      </div>
    </div>
    <div class="grow">
      <div class="mx-2 p-2">
        <h1 class="text-2xl text-slate-900 font-semibold mt-4 mb-2">
          {{ data.name }}
        </h1>
        <div id="contact" class="flex-none text-slate-700">
          <div class="flex flex-col gap-1 text-md">
            <a v-if="data.email" :href="`mailto:${email}`">
              <i class="fa-solid fa-envelope"></i>
              <span class="ml-4">
                {{ data.email }}
              </span>
            </a>

            <a v-if="data.phone">
              <i class="fa-solid fa-phone"></i>
              <span class="ml-4">
                {{ data.phone }}
              </span>
            </a>

            <a :href="data.linkedin" target="_blank">
              <i class="fab fa-linkedin fa-lg"></i>
              <span class="ml-4">
                {{ data.linkedin.replace("https://", "") }}
              </span>
            </a>

            <a :href="data.github" target="_blank">
              <i class="fab fa-github fa-lg"></i>
              <span class="ml-4">
                {{ data.github.replace("https://", "") }}
              </span>
            </a>

            <a :href="data.webpage" target="_blank">
              <i class="fa-solid fa-link"></i>
              <span class="ml-4">
                {{ data.webpage.replace("https://", "") }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row place-items-end h-full print-hidden">
      <button
        class="text-slate-500 mr-2 mb-2 p-0 px-1"
        @click="print"
        data-twe-toggle="tooltip"
        :title="$t('help_print')"
      >
        <i class="fa-solid fa-print"></i>
      </button>
      <select
        class="bg-slate-300 text-slate-500 font-bold mr-2 mb-2 p-1"
        v-model="$i18n.locale"
        id="locale"
        data-twe-toggle="tooltip"
        :title="$t('help_language')"
      >
        <option
          v-for="locale in $i18n.availableLocales"
          v-bind:key="locale"
          :value="locale"
        >
          {{ locale.toUpperCase() }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { Tooltip, initTWE } from "tw-elements";
initTWE({ Tooltip });

export default {
  name: "Header",
  props: {
    data: Object,
    print: Function,
  },
};
</script>
