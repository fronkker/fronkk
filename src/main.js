import TestBtn from "./components/TestBtn.vue";
import TestInput from "./components/TestInput.vue";

export {TestBtn, TestInput}


// TODO 여기부터 개발용

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
// app.component('TestBtn', TestBtn)

app.mount('#app')


