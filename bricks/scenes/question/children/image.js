
`use strict`

//......................................................................................................................

project.bricks.scenes.question.children.image = (link, position) =>
({
  id: `image`,
  classes: [`center`, `fadein`],
  styles:
  [
    [`width`, `calc(var(--u) * 600)`],
    [`height`, `calc(var(--u) * 500)`],
    [`background-image`, `url(${link})`],
    [`background-repeat`, `no-repeat`],
    [`background-position`, position],
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
})

