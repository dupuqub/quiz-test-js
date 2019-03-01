
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
    const lang = dunp.getLang()
    const image = dunp.get(`#image`)
    const solution = dunp.get(`#solution`)
    const questionIndex = project.states.temp.question
    const question = project.questions[questionIndex]

    // Funtion.toString() has issue with having double quotes inside its text.
    // The double quotes symbol can't even be written in commentaries.
    // It will therefore be represented by 2 single quotes as in `''`.
    // It also doesn't matter putting an inverted bar before it as in `\''`
    // This is a browser (v8 engine) issue, not mine (dunp engine).
    // The code line below would also work as a double quotes replacement.
    // String.fromCharCode(34)

    project.states.temp.locked = true
    image.style.transform = `rotateY(180deg)`
    solution.style.opacity = 1
    solution.innerHTML = `${question.painters[0]} ${lang.painted} ''${question.title}'' ${lang.in} ${question.year}.`
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
                    classes: [`center`, `nonSelect`],
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
                      [`border`, `calc(var(--u) * 40) solid #00000000`],
                      [`box-sizing`, `border-box`],
                      [`text-align`, `center`],
                    ],
                  },
                },
                {
                  id: `continue`,
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
                  inner: lang.continue,
                },
              ],
            },
          },
        ],
      },
    ],
  }

  return brick
}

