'use strict'

const figlet = require('figlet')

export function cli(args) {
	console.log(figlet.textSync('Hooks CLI', {
  	font: 'Standard',
  	horizontalLayout: 'default',
  	verticalLayout: 'default'
	}))
}