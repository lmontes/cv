<template>
  <footer class="grid bg-slate-300 justify-items-center text-slate-700 p-3">
    <p>
      {{year}} - Luis Miguel Montes Novella
    </p>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
