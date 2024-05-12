<template>
  <div class="grid grid-cols-3 gap-2">
    <div
      v-for="s in skills"
      v-bind:key="s"
      class="px-4 py-2 rounded-lg border-2 border-emerald-600 border-emerald-600 text-black text-md"
    >
      {{ $t(s) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCards",
  props: {
    skills: Array,
  },
};
</script>