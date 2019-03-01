
`use strict`

//......................................................................................................................

project.bricks.scenes.ending.brick = () =>
{
  const lang = dunp.getLang()
  const brick =
  {
    id: `sceneEnding`,
    classes: [`center`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#FFF`],
      [`position`, `relative`],
      [`align-items`, `flex-start`],
    ],
    inner:
    [
      project.bricks.full(),
      {
        styles:
        [
          [`width`, `calc(100% - var(--u) * 100 * 2)`],
          [`height`, `calc(var(--u) * 100)`],
        ],
      },
      project.bricks.return(),
    ],
  }

  return brick
}
