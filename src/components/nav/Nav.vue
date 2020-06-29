<template>
  <v-app-bar
    color="deep-purple accent-4"
    dense
    light
    flat
    >

    <v-toolbar-title>김지희</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-movie</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-ski</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-silverware-fork-knife</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-star-face</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-menu
      left
      bottom
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
          >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Nav',
  
}
</script>

<style>

</style>