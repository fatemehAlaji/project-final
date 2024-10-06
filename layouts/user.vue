<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="bg-drawer"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content class="text-center">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
          </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
            <v-icon>mdi-application</v-icon>
          </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
            <v-icon>mdi-minus</v-icon>
          </v-btn> -->
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main dir="rtl" class="bg-general">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: "داشبورد",
          to: "/user/dashboard",
        },
        {
          title: "دستگاه ها",
          to: "/user/device",
        },
        {
          title: "قالب ها",
          to: "/user/template",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
};
</script>
<style scoped>
.bg-drawer {
  background-color: #233533;
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
