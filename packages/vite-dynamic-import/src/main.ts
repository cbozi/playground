function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');

  button.innerHTML = 'Click me';
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = () => import('./hello').then(module => {
    const print = module.default;

    print();
  });

  return element;
}

document.body.appendChild(component())

