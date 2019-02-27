
`use strict`

//......................................................................................................................

project.bricks.scenes.main.brick = () =>
{
  const lang = dunp.getLang()
  const brick =
  {
    classes: [`center`, `column`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#FFF`],
      [`position`, `relative`],
    ],
    inner:
    [
      {
        id: `titleBox`,
        classes: [`center`, `fadein`],
        styles: [[`margin-bottom`, `calc(var(--u) * 150)`]],
        inner:
        [
          project.bricks.scenes.main.children.rococo(`left`),
          {
            inner:
            [
              project.bricks.scenes.main.children.title(lang.pageTitle[0], false),
              project.bricks.scenes.main.children.title(lang.pageTitle[1], true),
            ],
          },
          project.bricks.scenes.main.children.rococo(`right`),
        ],
      },
      project.bricks.scenes.main.children.play(lang.play),
      project.bricks.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

