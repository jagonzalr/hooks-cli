'use strict'

import arg from 'arg'
import chalk from 'chalk'
import figlet from 'figlet'
import inquirer from 'inquirer'

import { createProject } from './main'

function parseArgumentsIntoOptions(rawArgs) {
	const args = arg(
		{
			'--git': Boolean,
			'--install': Boolean,
			'-g': '--git',
			'-i': '--install'
		}
	)

	return {
		git: args['--git'] || false,
		runInstall: args['--install'] || false
	}
}

async function promptForMissingOptions(options) {
	if (options.skipPrompts) {
		return { ...options }
	}

	let questions = []
	if (!options.git) {
		questions.push({
			type: 'confirm',
			name: 'git',
			message: 'Initialize a git repository?',
			default: false
		})
	}

	if (!options.runInstall) {
		questions.push({
			type: 'confirm',
			name: 'runInstall',
			message: 'Install dependencies?',
			default: true
		})
	}

	const answers = await inquirer.prompt(questions)
	return {
		...options,
		git: options.git || answers.git,
		runInstall: options.runInstall || answers.runInstall
	}
}

export async function cli(args) {
	console.log(chalk.green.bold(figlet.textSync('Hooks CLI', {
  	font: 'Standard',
  	horizontalLayout: 'default',
  	verticalLayout: 'default'
	})))

	let options = parseArgumentsIntoOptions(args)
	options = await promptForMissingOptions(options)
	await createProject(options)
}