<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      color="transparent"
    >
      <v-toolbar-side-icon 
        color="primary"
        @click="drawer = !drawer" 
      />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon 
          color="primary" 
          v-html="miniVariant ? 'chevron_right' : 'chevron_left'" 
        />
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title 
        class="primary--text" 
        v-text="title" 
      />
      <v-btn
        icon
        color="primary"
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      :right="right"
      v-model="rightDrawer"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile
          v-for="(action, i) in actions"
          :to="action.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="action.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="action.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
      color="primary"
    >
      <span class="pl-2 white--text">&copy; US Internet 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Overview', to: '/Overview' },
        { icon: 'attach_money', title: 'Billing & Payments', to: '/Billing' },
        { icon: 'wifi', title: 'My Services', to: '/Services' },
        { icon: 'exit_to_app', title: 'Sign Out', to: '/' }
      ],
      actions: [
        { icon: 'apps', title: 'Change Password', to: '/Password' },
        { icon: 'credit_card', title: 'Update Credit Card', to: '/CreditCard' },
        { icon: 'mail', title: 'Email preferences', to: '/EmailPreferences' },
        { icon: 'contact_support', title: 'Support Tickets', to: '/Support' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'USI MyFiber Portal'
    }
  }
}
</script>
