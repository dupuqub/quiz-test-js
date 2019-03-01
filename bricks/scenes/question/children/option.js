
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.option = (item, index, question) =>
{
  const click = () =>
  {
    if(!project.states.temp.locked)
    {
      const {target} = event
      const {id} = target
      const index = id.slice(-1)
      const selected = dunp.get(`#${id}`).innerHTML
      const questionIndex = project.states.temp.question
      const correct = project.questions[questionIndex].painters[0]

      project.states.temp.selected = selected

      dunp.getAll(`.option`).forEach(option => option.classList.remove(`yellow`))
      dunp.get(`#continue`).classList.remove(`red`)
      target.classList.add(`pulse`)
      target.classList.add(`yellow`)
      target.classList.remove(`fadein`)
      setTimeout(() => target.classList.remove(`pulse`), 500)
    }
  }

  const brick =
  {
    id: `option${index}`,
    classes: [`center`, `button`, `nonSelect`, `fadein`, `option`],
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
    inner: question.painters[item],
  }

  return brick
}

