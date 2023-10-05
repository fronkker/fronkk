import './style.css'

import TestBtn from "./components/TestBtn.vue";

export {TestBtn}

export default {
    install: (app) => {
        app.component('TestBtn', TestBtn)
    }
}