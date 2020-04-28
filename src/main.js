'use strict'

import chalk from 'chalk'
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import { promisify } from 'util'

const access = promisify(fs.access)
const copy = promisify(ncp)

export async function createProject(options) {
	options = {
	  ...options,
	  targetDirectory: options.targetDirectory || process.cwd()
	}

	console.log(options.targetDirectory)
	console.log('%s Project ready', chalk.green.bold('DONE'));
	return true
}