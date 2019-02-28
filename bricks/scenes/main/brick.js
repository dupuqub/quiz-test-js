
`use strict`

//......................................................................................................................

project.bricks.scenes.main.brick = () =>
{
  const lang = dunp.getLang()
  const brick =
  {
    id: `sceneMain`,
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
        styles:
        [
          [`width`, `100%`],
          [`height`, `10%`],
        ],
        inner:
        [
          {
            id: `fullBack`,
            classes: [`fadein`],
            styles:
            [
              [`width`, `calc(var(--u) * 100)`],
              [`height`, `calc(var(--u) * 100)`],
              [`background-image`, `url(images/fullBack.png)`],
              [`background-position`, `center`],
              [`background-size`, `contain`],
              [`cursor`, `pointer`],
            ],
            inner:
            {
              id: `full`,
              tag: `img`,
              extras: [[`src`, `images/full.png`]],
              styles:
              [
                [`width`, `100%`],
                [`height`, `100%`],
                [`transition`, `all 0.2s`],
              ],
            },
          },
        ],
      },
      {
        id: `titleBox`,
        classes: [`center`, `fadein`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `calc(50% - var(--u) * 50)`],
        ],
        inner:
        [
          project.bricks.rococo(`left`, 80, 50),
          {
            inner:
            [
              project.bricks.scenes.main.children.title(lang.pageTitle[0], false),
              project.bricks.scenes.main.children.title(lang.pageTitle[1], true),
            ],
          },
          project.bricks.rococo(`right`, 80, 50),
        ],
      },
      {
        id: `playBox`,
        classes: [`center`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `40%`],
          [`align-items`, `flex-start`],
        ],
        inner: project.bricks.scenes.main.children.play(lang.play),
      },
      project.bricks.lang(lang.name),
    ],
  }

  return brick
}

