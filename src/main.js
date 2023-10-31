import FkSeperator from "./components/FkSeparator.vue";
import FkInput from "./components/FkInput.vue";
import FkPagination from './components/FkPagination.vue'
import './style.css'

export {FkInput, FkSeperator,FkPagination}

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
