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
            <v-toolbar-title class="white--text">Change Password</v-toolbar-title>
            <v-spacer />
            <v-icon color="white">lock</v-icon>
          </v-toolbar>
          <v-flex>
            <v-text-field
              label="Old Password"
              type="password"
            />
          </v-flex>
          <v-flex>
            <v-text-field
              label="New Password"
              type="password"
            />
          </v-flex>

          <v-flex>
            <v-text-field
              label="Confirm Password"
              type="password"
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
    title: 'Change Password'
  })
}
</script>
