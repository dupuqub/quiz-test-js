
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.title = question =>
({
  classes: [`center`, `fadein`],
  styles:
  [
    [`width`, `100%`],
    [`height`, `20%`],
    [`color`, `#AAA`],
    [`font-size`, `calc(var(--u) * 70)`],
    [`font-family`, `Playfair Display, serif`],
  ],
  inner: question,
})

