
`use strict`

//......................................................................................................................

project.bricks.scenes.question.brick = () =>
{
  const arrayOld = [0, 1, 2, 3]
  const arrayNew = dunp.array.shuffle(arrayOld)
  const questionIndex = project.states.temp.question
  const question = project.questions[questionIndex]
  const lang = dunp.getLang()

  const click = () =>
  {
    dunp.get(`#image`).style.transform = `rotateY(180deg)`
    dunp.get(`#solution`).style.opacity = 1
  }

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
      project.bricks.scenes.question.children.title(lang.question),
      {
        id: `zoneBox`,
        classes: [`center`],
        styles:
        [
          [`width`, `100%`],
          [`height`, `calc(80% - var(--u) * 50)`],
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
                {
                  id: `image`,
                  classes: [`center`, `fadein`],
                  styles:
                  [
                    [`width`, `calc(var(--u) * 600)`],
                    [`height`, `calc(var(--u) * 500)`],
                    [`background-image`, `url(${question.link})`],
                    [`background-repeat`, `no-repeat`],
                    [`background-position`, question.position],
                    [`background-size`, `cover`],
                    [`border-radius`, `calc(var(--u) * 90)`],
                    [`margin-bottom`, `calc(var(--u) * 50)`],
                    [`transition`, `all 0.3s`],
                  ],
                  inner:
                  {
                    id: `solution`,
                    classes: [`center`],
                    styles:
                    [
                      [`width`, `calc(var(--u) * 580)`],
                      [`height`, `calc(var(--u) * 480)`],
                      [`border-radius`, `calc(var(--u) * 80)`],
                      [`background`, `#FFFFFFEE`],
                      [`color`, `#666`],
                      [`font-size`, `calc(var(--u) * 40)`],
                      [`font-family`, `Playfair Display, serif`],
                      [`transform`, `rotateY(180deg)`],
                      [`transition`, `all 0.3s`],
                      [`opacity`, `0`],
                    ],
                    inner: `${question.painters[0]}<br>${lang.painted} ${question.title}<br>${lang.in} ${question.year}.`
                  },
                },
                {
                  id: `confirm`,
                  classes: [`center`, `button`, `nonSelect`, `fadein`],
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
                  inner: lang.confirm,
                },
              ],
            },
          },
        ],
      },
      project.bricks.lang(lang.name),
    ],
  }

  return brick
}

