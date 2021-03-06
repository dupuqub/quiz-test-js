
`use strict`

//......................................................................................................................

project.bricks.lang = inner =>
{
  const click = () =>
  {
    const allLangs = Object.keys(project.langs)
    const lang = dunp.getLang()
    const langIndex = allLangs.indexOf(lang.id)
    const newLang =

        langIndex === allLangs.length - 1
      ? allLangs[0]
      : allLangs[langIndex + 1]

    const sceneId = project.states.temp.scene.id
    const titleText = project.langs[newLang].title
    const title = dunp.get(`title`)

    project.states.safe.lang = newLang
    title.innerHTML = titleText

    dunp.get(`#titleBox`).classList.add(`fadeout`)
    dunp.get(`#header`).classList.add(`fadeout`)
    dunp.get(`#play`).classList.add(`fadeout`)
    dunp.get(`#lang`).classList.add(`fadeout`)

    setTimeout(() => dunp.changeScene(sceneId), 500)
  }

  const brick =
  {
    id: `lang`,
    classes: [`center`, `button`, `nonSelect`, `fadein`],
    extras: [[`onclick`, dunp.trigger(click)]],
    styles:
    [
      [`width`, `100%`],
      [`height`, `calc(var(--u) * 50)`],
      [`transition`, `all 0.3s`],
      [`font-size`, `calc(var(--u) * 40)`],
      [`font-family`, `Montserrat, sans-serif`],
    ],
    inner: dunp.upper(inner),
  }

  return brick
}

