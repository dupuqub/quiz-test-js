
`use strict`

//......................................................................................................................

project.bricks.return = () =>
{
  const click = () =>
  {
    project.states.temp.locked = false
    project.states.temp.selected = null
    project.states.temp.question = 0

    const header = dunp.get(`#header`)
    const zoneBox = dunp.get(`#zoneBox`)

    if(header) header.classList.add(`fadeout`)
    if(zoneBox) zoneBox.classList.add(`fadeout`)

    setTimeout(() => dunp.changeScene(`main`), 500)
  }

  const brick =
  {
    id: `returnBack`,
    classes: [`fadein`],
    styles:
    [
      [`width`, `calc(var(--u) * 100)`],
      [`height`, `calc(var(--u) * 100)`],
      [`background-image`, `url(images/returnBack.png)`],
      [`background-position`, `center`],
      [`background-size`, `contain`],
      [`cursor`, `pointer`],
    ],
    inner:
    {
      id: `return`,
      tag: `img`,
      extras:
      [
        [`src`, `images/return.png`],
        [`onclick`, dunp.trigger(click)],
      ],
      styles:
      [
        [`width`, `100%`],
        [`height`, `100%`],
        [`transition`, `all 0.3s`],
      ],
    },
  }

  return brick
}

