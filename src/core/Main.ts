import { createBox, updateColor, updateLetter } from "./Box"
import { render } from "./Render"
import { addKeyboardInput, createRow } from "./Row";

export const mount = (element: Element) => {
  const box = createBox("A", "blank")
  updateLetter(box, "B")
  updateColor(box, "green")
  render(box, element)

  const row = createRow(5)
  addKeyboardInput(row)
  render(row, element)
}
