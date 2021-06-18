import logo from './logo.svg'

console.log(logo)

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');

  button.innerHTML = 'Click me and look at the console!';
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;

    print();
  });

  return element;
}


__webpack_public_path__ = 'http://localhost:8080/'
document.body.appendChild(component())
