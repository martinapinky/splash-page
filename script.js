const { body } = document;

const changeBackground = (number) => {
  // Check if background is already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset CSS class for body
  body.className = '';

  previousBackground === `background-${number}` ? false : body.classList.add(`background-${number}`)

  // switch (number) {
  //   case '1':
  //     return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
  //     break;
  //   case '2':
  //     body.classList.add('background-2');
  //     break;
  //   case '3':
  //     body.classList.add('background-3');
  //     break;
  //   default:
  //     break;
  // }
}