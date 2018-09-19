import axios from 'axios'
import { mapActions } from "vuex"
import CardComponent from '../Card/index.vue'
import getFunctions from '../../api_functions/get_functions'

export default {
    name: 'CardsComponent',
    props:['listID', 'boardID', 'list'],
    computed: {
      cards() {
        return this.$store.getters.cards
      }
    },
    components:{
      'card-component':CardComponent
    },
    methods: {
      //try fetch data after submit form with mapAction
      ...mapActions([
        'error',
        'loadCards',
        'loadCard',
        'addCard'
      ]),
      loadCards () {
        this.$store.dispatch('loadCards', this.listID)
      }
    },
    created () {
      this.loadCards();
    },
}
