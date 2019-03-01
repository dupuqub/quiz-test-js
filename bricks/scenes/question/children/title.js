
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.title = question =>
{
  const lang = dunp.getLang()
  const brick =
  {
    id: `header`,
    classes: [`fadein`, `center`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `20%`],
      [`color`, `#AAA`],
      [`font-size`, `calc(var(--u) * 70)`],
      [`font-family`, `Playfair Display, serif`],
      [`align-items`, `flex-start`],
    ],
    inner:
    [
      project.bricks.full(),
      {
        id: `titleBox`,
        classes: [`center`, `nonSelect`],
        styles:
        [
          [`width`, `calc(100% - var(--u) * 200)`],
          [`height`, `100%`],
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
            inner: lang.question,
          },
          project.bricks.rococo(`right`, 50, 0),
        ],
      },
      project.bricks.return(),
    ],
  }

  return brick
}

