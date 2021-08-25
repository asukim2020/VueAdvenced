<template>
  <div class="user-container">
      <div class="user-container">
         <div>
            <i class="fas fa-user-circle"></i>
         </div>
         <div class="user-description">
            <slot name="username"></slot>
            <slot name="time"></slot>
            <slot name="karma"></slot>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      info: Object
   },
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>