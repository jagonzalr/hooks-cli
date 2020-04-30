'use strict'

import chalk from 'chalk'
import execa from 'execa'
import fs from 'fs'
import Listr from 'listr'
import ncp from 'ncp'
import path from 'path'
import { promisify } from 'util'

const access = promisify(fs.access)
const copy = promisify(ncp)

async function copyTemplateFiles(options) {
	return copy(options.templateDirectory, options.targetDirectory, {
  	clobber: false
 	})
}

async function initGit(options) {
	const result = await execa('git', ['init'], { cwd: options.targetDirectory })
 	if (result.failed) {
  	return Promise.reject(new Error('Failed to initialize git'))
 	}

 	return
}

async function installDependencies(options) {
	let result = await execa('chmod', ['+x', 'install.sh'])
	if (result.failed) {
  	return Promise.reject(new Error('Failed to chmod +x install.sh'))
 	}

	result = await execa('./install.sh')
	if (result.failed) {
  	return Promise.reject(new Error('Failed to install dependencies'))
 	}

 	result = await execa('rm', ['-rf', 'install.sh'])
 	if (result.failed) {
  	return Promise.reject(new Error('Failed to delete install.sh'))
 	}

 	return
}

export async function createProject(options) {
	options = {
	  ...options,
	  targetDirectory: options.targetDirectory || process.cwd()
	}

	const currentFileUrl = import.meta.url;
	const templateDir = path.resolve(
	  new URL(currentFileUrl).pathname,
	  '../../template'
	)

	options.templateDirectory = templateDir

	try {
  	await access(templateDir, fs.constants.R_OK)
 	} catch (err) {
  	console.error('%s Invalid template path', chalk.red.bold('ERROR'))
   	process.exit(1)
 	}

 	const tasks = new Listr([
 		{
 			title: 'Copy files from template',
 			task: () => copyTemplateFiles(options)
 		},
 		{
 			title: 'Initialize git',
 			task: () => initGit(options),
 			enabled: () => options.git
 		},
 		{
 			title: 'Installing dependencies',
 			task: () => installDependencies()
 		}
 	])

 	await tasks.run()
	console.log('%s Project ready', chalk.green.bold('DONE'));
	return true
}