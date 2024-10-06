<template>
  <div>
    <p class="ma-8">device name</p>
    <v-card class="py-8 bg-general text-center">
      <p>
        <span>اخرین آپدیت</span>
        <span>:</span>
        <span>1403/4/5</span>
      </p>
      <p>
        <span>تایخ فعالسازی</span>
        <span>:</span>
        <span>1403/4/5</span>
      </p>
      <p>
        <span>وضعیت</span>
        <span class="ml-4">:</span>
        <v-badge color="error"></v-badge>
      </p>
    </v-card>
    <div class="text-left my-8">
      <v-icon color="white" type="button" class="mx-1">
        mdi-pencil-outline
      </v-icon>
      <v-icon color="#A22612" class="ml-8 mr-4" type="button">
        mdi-delete
      </v-icon>
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
