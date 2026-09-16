<script setup>
import DOMPurify from 'dompurify'

const userInput = '<img src=x onerror=alert("XSS")>' // 模擬惡意輸入
const safeContent = DOMPurify.sanitize(userInput) // 修正：使用 DOMPurify 進行安全淨化

</script>

<template>
  <!-- 錯誤寫法 (高風險)：<div v-html="userInput"></div> -->
  
  <!-- 正確寫法：經淨化後再進行渲染 -->
  <div v-html="safeContent"></div>
</template>