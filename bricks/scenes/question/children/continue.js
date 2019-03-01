
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.continue = () =>
{
  const questionIndex = project.states.temp.question
  const question = project.questions[questionIndex]
  const lang = dunp.getLang()

  //....................................................................................................................

  const click = () =>
  {
    const {target} = event

    if(project.states.temp.locked)
    {
      // go to next picture
    }

    else if(dunp.typeOf(project.states.temp.selected) !== `null`)
    {
      const lang = dunp.getLang()
      const image = dunp.get(`#image`)
      const solution = dunp.get(`#solution`)
      const questionIndex = project.states.temp.question
      const question = project.questions[questionIndex]

      project.states.temp.locked = true
      image.style.transform = `rotateY(180deg)`
      solution.style.opacity = 1
      solution.innerHTML = `${question.painters[0]} ${lang.painted} ''${question.title}'' ${lang.in} ${question.year}.`

      target.innerHTML = lang.next
      target.classList.add(`pulse`)
      target.classList.remove(`fadein`)

      setTimeout(() =>
      {
        target.classList.remove(`pulse`)
        target.classList.add(`warning`)
      }, 500)
    }

    else
    {
      target.classList.add(`locked`)
      target.classList.remove(`fadein`)

      setTimeout(() => target.classList.remove(`locked`), 500)
    }
  }

  //....................................................................................................................

  const brick =
  {
    id: `continue`,
    classes: [`center`, `button`, `nonSelect`, `fadein`, `mobileLocked`],
    extras: [[`onclick`, dunp.trigger(click)]],
    styles:
    [
      [`width`, `calc(var(--u) * 600)`],
      [`height`, `calc(var(--u) * 180)`],
      [`border-radius`, `calc(var(--u) * 100)`],
      [`transition`, `all 0.3s`],
      [`font-size`, `calc(var(--u) * 40)`],
      [`font-family`, `Montserrat, sans-serif`],
    ],
    inner: lang.continue,
  }

  return brick
}

