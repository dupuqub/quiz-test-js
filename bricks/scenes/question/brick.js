
`use strict`

//......................................................................................................................

project.bricks.scenes.question.brick = () =>
{
  const arrayOld = [0, 1, 2, 3]
  const arrayNew = dunp.array.shuffle(arrayOld)
  const question = project.states.temp.question

  const lang = dunp.getLang()
  const brick =
  {
    classes: [`center`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#FFF`],
      [`position`, `relative`],
    ],
    inner:
    [
      [
        {
          id: `zoneLeft`,
          styles:
          [
            [`width`, `50%`],
            [`height`, `100%`],
            [`background`, `orange`],
          ],
          inner: arrayNew.map((item, index) =>
          {
            return project.bricks.scenes.question.children.option(item, index, question)
          }),
        },
        {
          id: `zoneRight`,
          styles:
          [
            [`width`, `50%`],
            [`height`, `100%`],
            [`background`, `blue`],
          ],
        },
      ],
      project.bricks.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

