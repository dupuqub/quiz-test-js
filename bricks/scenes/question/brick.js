
`use strict`

//......................................................................................................................

project.bricks.scenes.question.brick = () =>
{
  const arrayOld = [0, 1, 2, 3]
  const arrayNew = dunp.array.shuffle(arrayOld)
  const questionIndex = project.states.temp.question
  const question = project.questions[questionIndex]

  const lang = dunp.getLang()
  const brick =
  {
    id: `sceneQuestion`,
    classes: [`center`, `column`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#FFF`],
      [`position`, `relative`],
    ],
    inner:
    [
      {
        id: `title`,
        classes: [`center`, `fadein`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `20%`],
          [`color`, `#AAA`],
          [`font-size`, `calc(var(--u) * 70)`],
          [`font-family`, `Playfair Display, serif`],
        ],
        inner: lang.question,
      },
      {
        id: `zoneBox`,
        classes: [`center`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `80%`],
        ],
        inner:
        [
          {
            id: `zoneLeft`,
            classes: [`center`, `column`],
            styles:
            [
              [`justify-content`, `flex-start`],
              [`width`, `50%`],
              [`height`, `100%`],
            ],
            inner: arrayNew.map((item, index) =>
            {
              return project.bricks.scenes.question.children.option(item, index, question)
            }),
          },
          {
            id: `zoneRight`,
            classes: [`center`, `column`],
            styles:
            [
              [`width`, `50%`],
              [`height`, `100%`],
            ],
          },
        ],
      },
      project.bricks.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

