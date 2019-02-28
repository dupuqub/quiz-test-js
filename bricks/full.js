
`use strict`

//......................................................................................................................

project.bricks.full = () =>
{
  const click = () =>
  {
    if(document.fullscreenElement
    || document.msFullscreenElement
    || document.mozFullScreenElement
    || document.webkitFullscreenElement)
    {
           if(document.exitFullscreen) document.exitFullscreen()
      else if(document.mozCancelFullScreen) document.mozCancelFullScreen()
      else if(document.webkitExitFullscreen) document.webkitExitFullscreen()
      else if(document.msExitFullscreen) document.msExitFullscreen()
    }
    else if(body.requestFullscreen) body.requestFullscreen()
    else if(body.msRequestFullscreen) body.msRequestFullscreen()
    else if(body.mozRequestFullScreen) body.mozRequestFullScreen()
    else if(body.webkitRequestFullscreen) body.webkitRequestFullscreen()
  }

  const brick =
  {
    id: `fullBack`,
    classes: [`fadein`],
    styles:
    [
      [`width`, `calc(var(--u) * 100)`],
      [`height`, `calc(var(--u) * 100)`],
      [`background-image`, `url(images/fullBack.png)`],
      [`background-position`, `center`],
      [`background-size`, `contain`],
      [`cursor`, `pointer`],
    ],
    inner:
    {
      id: `full`,
      tag: `img`,
      extras:
      [
        [`src`, `images/full.png`],
        [`onclick`, dunp.trigger(click)],
      ],
      styles:
      [
        [`width`, `100%`],
        [`height`, `100%`],
        [`transition`, `all 0.2s`],
      ],
    },
  }

  return brick
}

