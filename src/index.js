import { createApp } from Vue

import MyElement from './entry'

const App = {
  template: '<my-button />'
}

createApp(App)
  .use(MyElement)
  .mount("#app")