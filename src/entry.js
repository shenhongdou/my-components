import MyButton from '../packages/Button/Button.vue'
import MyInput from '../packages/Input/Input.vue'

MyButton.install = app => app.component('MyButton', MyButton) 
MyInput.install = app => app.component('MyInput', MyInput)

const MyElement = {
  MyButton,
  MyInput,
  install (app) {
    app.use(MyButton)
    app.use(MyInput)
  }
}

export default MyElement