
`use strict`

//......................................................................................................................

project.bricks.lang = (inner, absolute) =>
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
    dunp.changeScene(sceneId)
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
      [`transition`, `all 0.2s`],
      [`font-size`, `calc(var(--u) * 40)`],
      [`font-family`, `Montserrat, sans-serif`],
    ],
    inner: dunp.upper(inner),
  }

  return brick
}

