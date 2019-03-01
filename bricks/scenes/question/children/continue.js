
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
      target.classList.add(`yellow`)
      target.classList.remove(`fadein`)

      setTimeout(() => target.classList.remove(`pulse`), 500)

      const selected = project.states.temp.selected
      const selectedIndex = question.painters.indexOf(selected)

      dunp.getAll(`.option`).forEach((option, index) =>
      {
        option.classList.remove(`yellow`)

        const innerIndex = question.painters.indexOf(option.innerHTML)

        if(selected === option.innerHTML)
        {
          if(selectedIndex === 0) option.classList.add(`green`)
          else option.classList.add(`red`)
        }
        else if(innerIndex === 0) option.classList.add(`green`)
      })
    }
  }

  //....................................................................................................................

  const brick =
  {
    id: `continue`,
    classes: [`center`, `button`, `nonSelect`, `fadein`, `red`],
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

