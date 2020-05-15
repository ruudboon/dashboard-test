<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Led bar</h1>
        <v-progress-linear :value="ledbarPCT"></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ledbarPCT: 30
    }),
  }
</script>
