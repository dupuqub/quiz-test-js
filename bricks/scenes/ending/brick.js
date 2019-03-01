
`use strict`

//......................................................................................................................

project.bricks.scenes.ending.brick = () =>
{
  const score = project.states.temp.score
  const lang = dunp.getLang()

  const click = () =>
  {
    project.states.temp.locked = false
    project.states.temp.selected = null
    project.states.temp.question = 0

    const header = dunp.get(`#header`)
    const message = dunp.get(`#message`)
    const again = dunp.get(`#again`)

    if(header) header.classList.add(`fadeout`)
    if(message) message.classList.add(`fadeout`)
    if(again) again.classList.add(`fadeout`)

    setTimeout(() => dunp.changeScene(`question`), 500)
  }

  const brick =
  {
    id: `sceneEnding`,
    classes: [`center`, `column`],
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
      {
        id: `header`,
        classes: [`center`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `calc(var(--u) * 100)`],
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
      },
      {
        id: `message`,
        classes: [`center`, `nonSelect`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `50%`],
          [`color`, `#AAA`],
          [`font-size`, `calc(var(--u) * 100)`],
          [`font-family`, `Playfair Display, serif`],
        ],
        inner: `${lang.achieved} ${score}!`,
      },
      {
        id: `againBox`,
        classes: [`center`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `calc(50% - var(--u) * 100)`],
          [`color`, `#AAA`],
          [`font-size`, `calc(var(--u) * 50)`],
          [`font-family`, `Montserrat, sans-serif`],
          [`align-items`, `flex-start`],
        ],
        inner:
        {
          id: `again`,
          classes: [`center`, `button`, `nonSelect`],
          extras: [[`onclick`, dunp.trigger(click)]],
          styles:
          [
            [`width`, `calc(var(--u) * 600)`],
            [`height`, `calc(var(--u) * 180)`],
            [`font-size`, `calc(var(--u) * 40)`],
            [`font-family`, `Montserrat, sans-serif`],
            [`border-radius`, `calc(var(--u) * 90)`],
            [`transition`, `all 0.3s`],
            [`white-space`, `nowrap`],
          ],
          inner: lang.another,
        },
      },
    ],
  }

  return brick
}
