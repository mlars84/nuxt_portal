<template>
  <v-container 
    grid-list-xl 
    fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        d-block
        xs12 
        sm12
        md8
        lg8
      >
        <v-card flat>
          <v-toolbar 
            card 
            dense 
            flat
            color="secondary"
          >
            <v-toolbar-title class="white--text">Email Opt Out</v-toolbar-title>
            <v-spacer />
            <v-icon color="white">email</v-icon>
          </v-toolbar>
          <v-flex
            v-for="(optOut, i) in optOuts"
            :key="i"
          >
            <v-checkbox
              :label="optOut.type"
              v-model="optOut.value"
              color:secondary
            />
          </v-flex>
          <v-card-actions>
            <v-btn color="primary">Save</v-btn>
            <v-btn to="/Overview">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'Email Preferences',
    optOuts: [
      { type: 'Marketing', value: true },
      { type: 'Promotional', value: true },
      { type: 'News', value: false },
      { type: 'Feedback', value: true }
    ]
  })
}
</script>
