<template>
  <div>
    <v-card class="pa-2 bg-general">
      <v-card-title> قالب ها</v-card-title>
      <v-card-text v-for="i in 5" :key="i" class="bg-card my-2">
        <v-row>
          <v-col cols="8">
            <router-link
              :to="{ name: 'user-detailTemplate' }"
              class="mx-5 text-decoration-none"
              style="color: white"
            >
              template name
            </router-link>
          </v-col>
          <v-col cols="2">
            <v-icon color="#A22612" class="mx-1" type="button">
              mdi-delete
            </v-icon>
            <span class="color-text">حذف</span>
          </v-col>
          <v-col cols="2">
            <v-icon color="white" type="button" class="mx-1">
              mdi-pencil-outline
            </v-icon>
            <span>ویرایش</span>
          </v-col>
        </v-row>
      </v-card-text>
      <div class="add-device my-5 mr-auto ml-2">
        <v-icon size="40px" type="button">mdi-plus</v-icon>
      </div>
    </v-card>
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
