<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      sm12
      md12
      lg6
    >
      <v-card flat>
        <v-toolbar
          card
          dense
          flat
          color="secondary"
        >
          <v-toolbar-title class="white--text">My Support Tickets</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="(ticket, i) in tickets"
            :key="i"
            :to="`/Ticket/${ticket.number}`"
            avatar
          >
            <v-list-tile-action>
              <v-icon>contact_support</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title
                v-text="ticket.number"
              />
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title v-text="ticket.date" />
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title v-text="ticket.description" />
            </v-list-tile-content>
            <v-list-tile-avatar>
              <p :class="`${ticket.color}--text`">{{ ticket.status }}</p>
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
        <v-btn @click="newTicket = !newTicket">New Ticket</v-btn>
        <div v-if="newTicket">
          <v-card-text>
            <v-text-field
              v-model="customerFeedback"
              box
              clearable
              multi-line
              height="200"
              placeholder="What kind of support do you need?"
            />
            <v-select
              v-model="selectedTicket"
              :items="ticketTypes"
              item-text="type"
              item-value="value"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>send</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    title: 'Support Tickets',
    customerFeedback: '',
    newTicket: false,
    selectedTicket: '',
    tickets: [
      {
        number: '1411667',
        date: 'Aug 30, 2018',
        description: 'Technical Support Ticket',
        status: 'Closed',
        color: 'red'
      },
      {
        number: '1411954',
        date: 'Aug 27, 2018',
        description: 'Customer Support Ticket',
        status: 'Open',
        color: 'green'
      }
    ],
    ticketTypes: [
      { value: 1, type: 'Technical Support Ticket' },
      { value: 2, type: 'Customer Support Ticket' }
    ]
  })
}
</script>
