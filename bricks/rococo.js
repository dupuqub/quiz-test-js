
`use strict`

//......................................................................................................................

project.bricks.rococo = (side, size, bottom) =>
{
  const id = `rococo${dunp.title(side)}`
  const brick =
  {
    id,
    styles:
    [
      [`width`, `calc(var(--u) * ${size * 5})`],
      [`height`, `calc(var(--u) * ${size})`],
      [`transition`, `all 0.3s`],
      [`background-image`, `url(images/${id}.png)`],
      [`background-position`, `center`],
      [`background-size`, `contain`],
      [`margin-bottom`, `calc(var(--u) * ${bottom})`],
    ],
  }

  return brick
}

