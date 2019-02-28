
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
  inner:
  [
    project.bricks.rococo(`left`, 50, 0),
    {
      styles:
      [
        [`margin-left`, `calc(var(--u) * 70)`],
        [`margin-right`, `calc(var(--u) * 70)`],
      ],
      inner: question,
    },
    project.bricks.rococo(`right`, 50, 0),
  ],
})

