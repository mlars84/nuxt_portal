<template>
  <v-container 
    grid-list-xl 
    fluid
  >
    To make a payment on a balance due, please &nbsp;<router-link to="/CreditCard"> update your Credit Card.</router-link>
    <v-layout
      row
      wrap
    >
      <v-flex
        d-block
        sm12
        md12
        lg6
      >
        <v-card>
          <!-- <v-subheader></v-subheader> -->
          <v-toolbar
            card 
            dense 
            flat
            color="secondary"
          >
            <v-toolbar-title class="white--text">Invoice: <router-link to="/invoice">{{ invoiceNumber }}</router-link></v-toolbar-title>
          </v-toolbar>
          <v-list 
            two-line
            subheader
          >
            <v-list>
              <v-list-tile
                avatar
              >
                <v-list-tile-action>
                  <v-icon>attach_money</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Total Charges:</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-avatar>
                  $49.95
                </v-list-tile-avatar>
              </v-list-tile>
            </v-list>
            <v-list>
              <v-list-tile
                v-for="(service, i) in services"
                :key="i"
                avatar
              >
                <v-list-tile-action>
                  <v-icon>star</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title v-text="service.name" />
                </v-list-tile-content>

                <v-list-tile-avatar>
                  {{ service.price }}
                </v-list-tile-avatar>
              </v-list-tile>
            </v-list>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex
        d-block
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
            <v-toolbar-title class="white--text">Recent Invoices</v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-list-tile
              v-for="(invoice, i) in invoices"
              :key="i"
              avatar
            >
              <v-list-tile-action>
                <v-icon>list</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title v-text="invoice.number" />
              </v-list-tile-content>
              <v-list-tile-content>
                <v-list-tile-title v-text="invoice.date" />
              </v-list-tile-content>
              <v-list-tile-avatar>
                {{ invoice.total }}
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex
        d-block
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
            <v-toolbar-title class="white--text">Recent Payments</v-toolbar-title>
          </v-toolbar>
          <v-card-text v-if="!payments.length">You have made no recent payments to this account.</v-card-text>
          <v-card-actions>
            <v-btn 
              flat
              to="/Payments"  
            >All Payments</v-btn>
            <v-btn 
              flat
              to="/CreditCard"  
            >Update Credit Card</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: 'Billing & Payments',
    invoiceNumber: '1609784',
    services: [
      {
        name: '25 Mbps USI TDM Service',
        price: '$24.95'
      },
      {
        name: '1 Gbps Fiber',
        price: '$19.95'
      }
    ],
    invoices: [
      {
        number: '1609784',
        date: 'Jun 29, 2018',
        total: '$49.90'
      },
      {
        number: '1609783',
        date: 'May 29, 2018',
        total: '$49.90'
      }
    ],
    payments: []
  })
}
</script>
