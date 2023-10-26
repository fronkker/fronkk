import FInput from "./components/FInput.vue";
import FSelect from "./components/FSelect.vue";
import FSeperator from "./components/FSeparator.vue";

export {FInput, FSelect, FSeperator}

// TODO 여기부터 개발용

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
