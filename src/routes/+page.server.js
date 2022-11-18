import { error } from '@sveltejs/kit'
import fs from 'fs'
import path from 'path'
import { compile } from 'mdsvex'
import { remarkPlugins } from '../../svelte.config'

export async function load({ params }) {
  try {
    const readme = fs.readFileSync(path.resolve(process.cwd(),'README.md'))
    const processed = await compile(readme,{remarkPlugins})
    return { headings: processed.data.headings }
  } catch (err) {
    console.error('/+page.server.js',err)
    throw error(510,`${err}, check console for stack`)
  }
}
