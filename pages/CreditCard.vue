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
        lg6
      >
        <v-card>
          <v-toolbar 
            card 
            dense 
            flat
            color="secondary"
          >
            <v-toolbar-title class="white--text">Update Credit Card</v-toolbar-title>
            <v-spacer />
            <v-icon 
              color="white"
              @click="editMode = !editMode"
            >edit</v-icon>
            <v-icon 
              color="white"
              @click="editMode = !editMode"
            >add</v-icon>
          </v-toolbar>
          <v-card-text v-if="editMode">
            <v-flex>
              <v-subheader>Expiry Date</v-subheader>
              <v-date-picker 
                v-model="picker" 
                landscape="landscape"
              />
            </v-flex>
          </v-card-text>
          <v-card-text v-else>
            <v-flex
              sm12
              md12
              lg12
            >
              <v-text-field
                label="Card Holder"
                type="text"
              />
            </v-flex>
            <v-flex
              sm12
              md12
              lg12
            >
              <v-text-field
                label="Card Number"
                type="password"
              />
            </v-flex>
            <v-flex
              sm12
              md12
              lg12
            >
              <v-subheader>Expiry Date</v-subheader>
              <v-date-picker 
                v-model="picker" 
                landscape="landscape"
              />
            </v-flex>
            <v-flex
              sm12
              md12
              lg12
            >
              <v-text-field
                label="CVV"
                type="number"
              />
            </v-flex>
            <v-flex
              sm12
              md12
              lg12
            >
              <v-text-field
                label="Address"
                type="text"
              />
            </v-flex>
          </v-card-text>
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
    title: 'Update Credit Card',
    editMode: false,
    picker: new Date().toISOString().substr(0, 10)
  })
}
</script>
