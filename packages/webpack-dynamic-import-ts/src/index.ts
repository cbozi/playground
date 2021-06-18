import {retryDynamicImport, addRetryDomain} from '@yuanfudao/resource-retry'

addRetryDomain('yfd', 2)

function component() {
	const element = document.createElement('div');
	const button = document.createElement('button');
  
	button.innerHTML = 'Click me';
	element.appendChild(button);
  
	// Note that because a network request is involved, some indication
	// of loading would need to be shown in a production-level site/app.
	button.onclick = () => retryDynamicImport(() => import(/* webpackChunkName: "hello" */ './hello')).then((module:any) => {
	  const hello = module.default;
  
	  hello();
	}).catch(() => {
		console.log('fuck')
	}).finally(() => {
		// console.log(__webpack_public_path__)
	});
  
	return element;
  }
  
  document.body.appendChild(component())
  
  