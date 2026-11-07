import { createBox, updateLetter } from "./Box"
import type { Box } from "./Box";
import type { Renderable } from "./Render";

export type Row = {
  element: HTMLDivElement
  active: boolean
  boxes: Array<Box>
} & Renderable

export function createRow(n: number): Row {
  const rowElement = document.createElement("div")
  rowElement.classList = "row"
  
  const boxes: Box[] = []
  for (let i = 0; i < n; i++) {
    const box = createBox()
    boxes[i] = box
  }

  return {
    element: rowElement,
    active: true,
    boxes: boxes,
    render: (element: Element) => {
      element.appendChild(rowElement)
      for (let box of boxes) {
	box.render(rowElement)
      }
    }
  }
}

export function addKeyboardInput(row: Row) {
  let turn = 0

  document.addEventListener("keydown", (e) => {
    if (!row.active) {
      return
    }
    if (e.key === "Enter") {
      // eval
      return
    }

    if (e.key === "Backspace") {
      if (turn > 0) {
        turn--
        const activeBox = row.boxes[turn]
        if (activeBox) updateLetter(activeBox, "")
      }
      return
    }

    if (!/^[a-z]$/i.test(e.key)) return
    if (turn >= row.boxes.length) return

    const activeBox = row.boxes[turn]
    if (!activeBox) return

    updateLetter(activeBox, e.key.toUpperCase())
    turn++
  })

  return row
}
