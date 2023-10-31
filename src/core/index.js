import {noItemGuide as NoItemGuide} from "../../docs/guide/noItem.js"
import {indexGuide as IndexGuide} from "../../docs/guide/index.js"
import {inputGuide as InputGuide} from "../../docs/guide/input/input.js"

import FkSeperator from "../components/FkSeparator.vue"
import FkInput from "../components/FkInput.vue"
import FkPagination from "../components/FkPagination.vue"
import {computed} from "vue";
import {marked} from "marked";

export const MENU_TYPES = {
  PAGE: 'page',
  COMPONENT: 'component'
}

export const LEFT_MENUS = {
  INDEX: {
    id: 0,
    title: 'index',
    type: MENU_TYPES.PAGE,
    guide: marked(IndexGuide),
    component: ''
  },
  INSTALLATION: {
    id: 1,
    title: 'installation',
    type: MENU_TYPES.PAGE,
    guide: marked(NoItemGuide),
    component: ''
  },
  INPUT: {
    id: 2,
    title: 'fk-input',
    type: MENU_TYPES.COMPONENT,
    guide: marked(InputGuide),
    component: computed(() => FkInput)
  },
  // PAGINATION: {
  //   id: 3,
  //   title: 'fk-pagination',
  //   type: MENU_TYPES.COMPONENT,
  //   guide:marked(NoItemGuide),
  //   component: computed(() => FkPagination)
  // },
  SEPARATOR: {
    id: 4,
    title: 'fk-separator',
    type: MENU_TYPES.COMPONENT,
    guide: marked(NoItemGuide),
    component: computed(() => FkSeperator)
  },
}
