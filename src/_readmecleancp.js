import fs from 'fs'
import path from 'path'

try {
  const readme = fs.readFileSync(path.resolve(process.cwd()+'/src','_README.md'))
  const cleaned = readme.toString().replaceAll(/ \{#.*\}/g,'')
  console.log('Overwriting /README.md with clean copy')
  fs.writeFileSync(path.resolve(process.cwd(),'README.md'),cleaned)
} catch (err) {
  console.error(err)
}