
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.title = (inner, theme) =>
({
  id: `title${theme ? `Major` : `Minor`}`,
  classes: [`center`, `nonSelect`],
  styles:
  [
    [`color`, `#AAA`],
    [`font-size`, `calc(var(--u) * ${theme ? 200 : 30})`],
    [`font-family`, `Playfair Display, serif`],
    [`margin-right`, `calc(var(--u) * 80)`],
    [`margin-left`, `calc(var(--u) * 80)`],
    [`margin-bottom`, `calc(var(--u) * ${theme ? 0 : -50})`],
  ],
  inner,
})

