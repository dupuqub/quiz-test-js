
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.option = (item, index, question) =>
{
  const click = () =>
  {
    const id = event.target.id
    const index = id.slice(-1)
    const selected = dunp.get(`#${id}`).innerHTML
    const questionIndex = project.states.temp.question
    const correct = project.questions[questionIndex].painters[0]

    if(selected === correct) console.log(`correct`)
    else console.log(`wrong`)
  }

  const brick =
  {
    id: `option${index}`,
    classes: [`center`, `button`, `nonSelect`, `fadein`],
    extras:
    [
      [`onclick`, dunp.trigger(click)]
    ],
    styles:
    [
      [`width`, `calc(var(--u) * 600)`],
      [`height`, `calc(var(--u) * 180)`],
      [`font-size`, `calc(var(--u) * 40)`],
      [`font-family`, `Montserrat, sans-serif`],
      [`border-radius`, `calc(var(--u) * 90)`],
      [`transition`, `all 0.2s`],
    ],
    inner: question.painters[item],
  }

  return brick
}

