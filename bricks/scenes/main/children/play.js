
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.play = inner =>
{
  const click = () =>
  {
    dunp.get(`#titleBox`).classList.add(`fadeout`)
    dunp.get(`#header`).classList.add(`fadeout`)
    dunp.get(`#play`).classList.add(`fadeout`)
    dunp.get(`#lang`).classList.add(`fadeout`)

    setTimeout(() => dunp.changeScene(`question`), 500)
  }

  const brick =
  {
    id: `play`,
    classes: [`center`, `button`, `nonSelect`, `fadein`],
    extras: [[`onclick`, dunp.trigger(click)]],
    styles:
    [
      [`width`, `calc(var(--u) * 250)`],
      [`height`, `calc(var(--u) * 250)`],
      [`transition`, `all 0.3s`],
      [`font-size`, `calc(var(--u) * 60)`],
      [`font-family`, `Montserrat, sans-serif`],
      [`border-radius`, `50%`],
    ],
    inner,
  }

  return brick
}

