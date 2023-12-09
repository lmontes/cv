<template>
  <div class="text-xl text-slate-800 mb-3">
    {{ $t("lang_native") }}: {{ $t(nativeLanguage) }}
  </div>
  <table class="border-collapse">
    <thead>
      <tr class="bg-slate-300">
        <th class="px-4 py-1 text-md text-left">
          {{ $t("lang_language") }}
        </th>
        <th class="px-4 py-1 text-md text-left">
          {{ $t("lang_reading") }}
        </th>
        <th class="px-4 py-1 text-md text-left">
          {{ $t("lang_writing") }}
        </th>
        <th class="px-4 py-1 text-md text-left">
          {{ $t("lang_listening") }}
        </th>
        <th class="px-4 py-1 text-md text-left">
          {{ $t("lang_speaking") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="l in languages" v-bind:key="l.name" class="border-y border-slate-500">
        <td class="px-4 py-1 text-md text-left">
          {{ $t(l.name) }}
        </td>
        <td class="px-4 py-1 text-md text-right">
          {{ l.reading }}
        </td>
        <td class="px-4 py-1 text-md text-right">
          {{ l.writing }}
        </td>
        <td class="px-4 py-1 text-md text-right">
          {{ l.listening }}
        </td>
        <td class="px-4 py-1 text-md text-right">
          {{ l.speaking }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "LanguageTable",
  props: {
    nativeLanguage: String,
    languages: Array,
  },
};
</script>
