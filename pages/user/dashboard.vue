<template>
  <div class="pa-2">
    <p>لیست دستگاه ها</p>
    <div class="d-flex">
      <div v-for="i in 10" :key="i" class="bg-card ma-2">
        <span class="ma-4">دستگاه 1</span>
      </div>
    </div>
    <p>لیست قالب ها</p>
    <div class="d-flex">
      <div v-for="i in 10" :key="i" class="bg-card ma-2">
        <span class="ma-4">دستگاه 1</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "user",
};
</script>
<style scoped>
.color-text {
  color: #a22612;
}
.add-device {
  height: 40px;
  width: 40px;
  border: 2px solid white;
  border-radius: 5px;
}
.bg-card {
  background-image: linear-gradient(
    45deg,
    rgba(22, 28, 59, 0.5),
    rgb(14, 26, 62, 0.5),
    rgb(7, 32, 70, 0.5)
  );
  border-radius: 20px;
  color: white;
  height: 150px;
  width: 150px;
}
.bg-general {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 110, 1) 51%,
    rgba(2, 22, 84, 1) 100%
  );
}
</style>
