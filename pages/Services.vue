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
        sm6
        md6
        lg6
      >
        <v-card>
          <v-toolbar 
            card 
            dense 
            flat
            color="secondary"
          >
            <v-toolbar-title class="white--text">My Services</v-toolbar-title>
            <v-spacer />
            <v-icon color="white">wifi</v-icon>
          </v-toolbar>
          <v-list>
            <v-list-tile
              v-for="(service, i) in services"
              :key="i"
              avatar
            >
              <v-list-tile-action>
                <v-icon>wifi</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title v-text="service.type" />
              </v-list-tile-content>
              <v-list-tile-content>
                <v-list-tile-title v-text="service.price" />
              </v-list-tile-content>
              <v-list-tile-avatar>
                {{ service.price }}
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list>
          <v-card-actions>
            <v-btn 
              color="primary"
              to="/ChangeServices"
            >Change Services</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'My Services',
    services: [
      { type: 'TDM 25 Mbps', price: '$24.95' },
      { type: 'TDM 25 Mbps', price: '$24.95' }
    ]
  })
}
</script>
