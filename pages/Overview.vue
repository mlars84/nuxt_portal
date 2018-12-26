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
        md12
        lg8
      >
        <v-card>
          <v-toolbar 
            card 
            dense 
            flat
            color="secondary"
          >
            <v-toolbar-title class="white--text">Account Info</v-toolbar-title>
            <v-spacer />
            <v-icon color="white">account_circle</v-icon>
          </v-toolbar>
          <v-list 
            two-line
            subheader
          >
            <v-list-tile
              v-for="(value, i) in customer" 
              :key="i"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ i }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ value }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple
                >
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <!-- <v-flex 
        d-block 
        xs6
        md3 
        lg3
      >
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'Account Overview',
    customer: {
      Name: 'John Williamson',
      Address: '12450 Wayzata Blvd #123456 Hopkins, Minnesota 55305',
      Account: '151227',
      Email: 'johnw@email.com',
      'Payment Method': 'Credit Card'
    }
  })
}
</script>
