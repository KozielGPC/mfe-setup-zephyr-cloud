<script setup lang="ts">
import './index.css';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col">
    <main class="flex-1 flex flex-col items-center justify-center px-4">
      <div class="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-8 border border-blue-100 text-center">
        <h1 class="text-4xl font-extrabold text-blue-700 mb-2">app2-vue</h1>
        <h2 class="text-xl font-semibold text-green-600 mb-4">Micro-Frontend</h2>
        <div class="mb-6">
          <span class="inline-block bg-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Vue 3</span>
          <span class="inline-block bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">TypeScript</span>
          <span class="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Tailwind CSS</span>
          <span class="inline-block bg-purple-200 text-purple-800 text-xs font-bold px-3 py-1 rounded-full mr-2 mb-2">Webpack 5</span>
        </div>
        <p class="text-gray-600 mb-4">This is a micro-frontend built using Vue 3, styled with Tailwind CSS, and bundled with Webpack.</p>
      </div>
    </main>
  </div>
</template>