<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Led bar</h1>
        <v-progress-linear :value="ledbarPCT"></v-progress-linear>
        <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :value="temperature"
                color="teal"
        >
          {{ temperature }}
        </v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ledbarPCT: 30,
      temperature: 0
    }),
    mqtt: {
      'ledstrip': function(val) {
        this.ledbarPCT = val.toString();
      },
      'temperature': function(val) {
        this.temperature = val.toString();
      }
    }
  }
</script>
