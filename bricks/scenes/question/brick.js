
`use strict`

//......................................................................................................................
// Example.

project.bricks.scenes.question.brick = () =>
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
      project.bricks.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

