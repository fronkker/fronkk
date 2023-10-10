import TestBtn from "./components/TestBtn.vue";
import FInput from "./components/FInput.vue";
import FSelect from "./components/FSelect.vue";

export {TestBtn, FInput, FSelect}


// TODO 여기부터 개발용

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
// app.component('TestBtn', TestBtn)

app.mount('#app')


