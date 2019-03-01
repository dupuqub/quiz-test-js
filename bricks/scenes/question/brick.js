
`use strict`

//......................................................................................................................

project.bricks.scenes.question.brick = () =>
{
  const arrayOld = [0, 1, 2, 3]
  const arrayNew = dunp.array.shuffle(arrayOld)
  const questionIndex = project.states.temp.question
  const question = project.questions[questionIndex]
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
      project.bricks.scenes.question.children.title(),
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
            classes: [`center`],
            styles:
            [
              [`width`, `50%`],
              [`height`, `100%`],
              [`justify-content`, `flex-start`],
            ],
            inner:
            {
              id: `zoneRightBox`,
              classes: [`center`, `column`],
              styles:
              [
                [`transform-style`, `preserve-3d`],
                [`perspective`, `1000px`],
              ],
              inner:
              [
                project.bricks.scenes.question.children.image(question.link, question.position),
                project.bricks.scenes.question.children.continue(),
              ],
            },
          },
        ],
      },
    ],
  }

  return brick
}

