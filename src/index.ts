import { mount } from "./core/Main"
const container = document.querySelector<HTMLDivElement>('.app')

if (!container) {
  throw new Error("No element with class 'app' was found")
}

mount(container)
