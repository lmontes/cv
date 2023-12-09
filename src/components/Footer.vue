<template>
  <footer class="grid justify-items-center text-slate-400 p-5">
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
