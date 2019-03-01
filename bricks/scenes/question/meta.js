  
`use strict`

//......................................................................................................................

project.bricks.scenes.question.meta = () =>
({
  //....................................................................................................................

  id: `question`,
  stageOptions:
  {
    ratio: true,
    w: 16,
    h: 9,
  },

  //....................................................................................................................

  beforeOldExit: () => {},
  beforeBuild: () => {},
  afterBuild: () =>
  {
    const questionIndex = project.states.temp.question
    const question = project.questions[questionIndex]
    const selected = project.states.temp.selected
    const lang = dunp.getLang()

    if(project.states.temp.locked)
    {
      const selectedIndex = question.painters.indexOf(selected)
      const continueButton = dunp.get(`#continue`)

      continueButton.classList.add(`yellow`)
      continueButton.classList.remove(`red`)
      continueButton.innerHTML = lang.next

      dunp.getAll(`.option`).forEach(option =>
      {
        const optionIndex = question.painters.indexOf(option.innerHTML)

        if(option.innerHTML === selected)
        {
          if(selectedIndex === 0) option.classList.add(`green`)
          else option.classList.add(`red`)
        }
        else if(optionIndex === 0) option.classList.add(`green`)
      })

      const image = dunp.get(`#image`)
      const solution = dunp.get(`#solution`)

      image.style.transform = `rotateY(180deg)`
      solution.style.opacity = 1
      solution.innerHTML = `${question.painters[0]} ${lang.painted} ''${question.title}'' ${lang.in} ${question.year}.`
    }

    else if(selected !== null)
    {
      dunp.get(`#continue`).classList.remove(`red`)
      dunp.getAll(`.option`).forEach(option =>
      {
        if(option.innerHTML === selected) option.classList.add(`yellow`)
      })
    }
  },
  exit: () => {},
  loop: () => {},

  //....................................................................................................................
})

