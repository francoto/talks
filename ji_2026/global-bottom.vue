<template>
  <footer
    v-if="$nav.currentLayout !== 'cover' && !$nav.currentFrontmatter.hidePageNumber"
    class="absolute bottom-3 left-6 text-sm opacity-50 tabular-nums"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
