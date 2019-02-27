
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.option = (item, index, question) =>
{
  const click = () =>
  {
    const index = event.target.id.slice(-1)
    console.log(index)
  }

  const brick =
  {
    id: `option${index}`,
    classes: [`center`, `pointer`, `button`, `fadein`, `nonSelect`],
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

