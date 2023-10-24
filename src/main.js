import FInput from "./components/FInput.vue";
import FSelect from "./components/FSelect.vue";
import FSeperator from "./components/FSeparator.vue";
import './style.css'

export {FInput, FSelect, FSeperator}

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
