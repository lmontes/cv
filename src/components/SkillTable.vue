<template>
  <table>
    <tr v-for="s in skills" v-bind:key="s.name">
      <td class="text-md">
        {{s.name}}
      </td>
      <td class="px-4">
        <div class="w-32 bg-white h-4 border border-emerald-600">
          <div class="bg-emerald-600 h-full border-none" :style="{width: `${s.level}%`}"></div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "SkillTable",
  props: {
    skills: Array,
  },
};
</script>
