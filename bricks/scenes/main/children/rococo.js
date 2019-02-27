
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.rococo = side =>
{
  const id = `rococo${dunp.title(side)}`
  const brick =
  {
    id,
    styles:
    [
      [`width`, `calc(var(--u) * 400)`],
      [`height`, `calc(var(--u) * 96)`],
      [`transition`, `all 0.2s`],
      [`background-image`, `url(images/${id}.png)`],
      [`background-position`, `center`],
      [`background-size`, `contain`],
      [`margin-bottom`, `calc(var(--u) * 50)`],
    ],
  }

  return brick
}

