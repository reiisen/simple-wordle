export interface Renderable {
  render: (mount: Element) => void
}

export function render(renderable: Renderable, mount: Element) {
  renderable.render(mount)
}
