
console.log('hello from main')
import './a'

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');

  button.innerHTML = 'Click me and look at the console!';
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  // button.onclick = () => {
  //   import ('./a')
  // }

  return element;
}

document.body.appendChild(component())
