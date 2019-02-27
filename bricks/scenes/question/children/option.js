
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.option = (item, index, question) =>
({
  id: `option${index}`,
  inner: project.questions[question].painters[item],
})

