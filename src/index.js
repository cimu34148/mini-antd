import * as babel from '@babel/core'
const str = `import { Button } from 'element-ui'`

const {result} = babel.transform(str, {
    plugins: [
        function({types: t}) {
            return {
                visitor: {
                    ImportDeclaration(path, {opts}) {
                        console.log(path.node)
                    }
                }
            }
        }
    ]
})