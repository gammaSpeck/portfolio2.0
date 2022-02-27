export const assign3DHoverAnimation = (elementId: string) => {
  /* Store the element in el */
  let el = document.getElementById(elementId)
  if (!el) return

  /* Get the height and width of the element */
  const height = el.clientHeight
  const width = el.clientWidth

  /* Define function a */
  function handleMove(e: any) {
    /*
     * Get position of mouse cursor
     * With respect to the element
     * On mouseover
     */
    /* Store the x,y position */
    const { layerX: xVal, layerY: yVal } = e

    /*
     * Calculate rotation value along the Y-axis
     * Here the multiplier 20 is to
     * Control the rotation
     * You can change the value and see the results
     */
    const multiplier = 15
    const yRotation = multiplier * ((xVal - width / 2) / width)

    /* Calculate the rotation along the X-axis */
    const xRotation = -multiplier * ((yVal - height / 2) / height)

    /* Generate string for CSS transform property */
    const transformCSS =
      'perspective(50rem) scale(1.05) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    /* Apply the calculated transformation */
    el!.style.transform = transformCSS
  }

  /*
   * Add a listener for mousemove event
   * Which will trigger function 'handleMove'
   * On mousemove
   */
  el.addEventListener('mousemove', handleMove)

  /* Add listener for mouseout event, remove the rotation */
  el.addEventListener('mouseout', function () {
    el!.style.transform = 'perspective(50rem) scale(1) rotateX(0) rotateY(0)'
  })

  /* Add listener for mousedown event, to simulate click */
  el.addEventListener('mousedown', function () {
    el!.style.transform = 'perspective(50rem) scale(0.95) rotateX(0) rotateY(0)'
  })

  /* Add listener for mouseup, simulate release of mouse click */
  el.addEventListener('mouseup', function () {
    el!.style.transform = 'perspective(50rem) scale(1.05) rotateX(0) rotateY(0)'
  })
}

// assign3DHoverAnimation('exp--1') // ID of th element you wan to assign this animation to
// assign3DHoverAnimation('exp--2')
// assign3DHoverAnimation('exp--3')
