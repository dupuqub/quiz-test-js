
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.play = inner =>
{
  const click = () =>
  {
    dunp.get(`#titleBox`).classList.add(`fadeout`)
    dunp.get(`#rococoLeft`).classList.add(`fadeout`)
    dunp.get(`#rococoRight`).classList.add(`fadeout`)
    dunp.get(`#play`).classList.add(`fadeout`)
    dunp.get(`#lang`).classList.add(`fadeout`)

    setTimeout(() => dunp.changeScene(`question`), 500)
  }

  const brick =
  {
    id: `play`,
    classes: [`center`, `pointer`, `button`, `fadein`, `nonSelect`],
    extras: [[`onclick`, dunp.trigger(click)]],
    styles:
    [
      [`width`, `calc(var(--u) * 200)`],
      [`height`, `calc(var(--u) * 200)`],
      [`transition`, `all 0.2s`],
      [`font-size`, `calc(var(--u) * 40)`],
      [`font-family`, `Montserrat, sans-serif`],
      [`margin-bottom`, `calc(var(--u) * 100)`],
      [`border-radius`, `50%`],
    ],
    inner,
  }

  return brick
}

