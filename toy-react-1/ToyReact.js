export let ToyReact = {
	createElement(type, attributes, ...children){
		let element = document.createElement(type)
		for(let name in attributes){
			element.setAttribute(name, attributes[name])
		}
		console.log(element)
		for(let child of children){
		    if(typeof child === 'string')
		    	child = document.createTextNode(child)
			element.appendChild(child)
		}
		console.log(arguments)
        return element
	}
}
