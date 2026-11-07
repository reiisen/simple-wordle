import type { Renderable } from './Render';
import './styles/main.css'
export type Color = "blank" | "gray" | "yellow" | "green"

// export class Box {
//   element: HTMLDivElement
//   letter: string
//   color: Color

//   constructor() {
//     this.letter = ''
//     this.color = "blank"

//     const box = document.createElement("div")
//     box.classList = "box " + this.color

//     const letter = document.createElement("span")
//     letter.innerHTML = this.letter

//     box.appendChild(letter)
//     this.element = box
//   }

//   setLetter(letter: string) {
//     if (letter.length != 1) {
//       throw new Error("A letter bro")    
//     }

//     this.letter = letter

//     const element = this.element.querySelector<HTMLSpanElement>("span")

//     if (!element) {
//       throw new Error("Span number element not found?")
//     }

//     element.innerHTML = this.letter
//   }


//   setColor(color: Color) {
//     this.element.classList = "box " + color
//   }

//   render(app: Element) {
//     app.appendChild(this.element)
//   }
// }

export type Box = {
  element: HTMLDivElement
  letter: string
  color: Color
} & Renderable

export function createBox(letter: string = '', color: Color = "blank"): Box {
  const element = document.createElement("div")
  element.classList = "box " + color

  const letterElement = document.createElement("span")
  letterElement.innerHTML = letter
  letterElement.classList = "letter"
  
  element.appendChild(letterElement)
  return {
    element: element,
    letter: letter,
    color: color,
    render: (mount: Element) => {
      mount.appendChild(element)
    }
  }
}

export function updateLetter(box: Box, letter: string): Box {
  box.letter = letter
  const inner = box.element.querySelector<HTMLSpanElement>(".letter")

  if (!inner) {
    throw new Error("No letter span child?")
  }
  inner.innerHTML = letter

  return box
}

export function updateColor(box: Box, color: Color): Box {
  box.color = color;
  box.element.classList = "box " + color
  return box;
}
