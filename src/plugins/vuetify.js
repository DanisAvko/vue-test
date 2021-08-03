import Vue from 'vue';
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import ru from 'vuetify/es5/locale/ru';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const vuetify = new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru'
  },
  icons: {
    iconfont: 'md',
  },
});

export default vuetify;

