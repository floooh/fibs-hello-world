import * as fibs from 'https://raw.githubusercontent.com/floooh/fibs/main/mod.ts'

export const projectDesc: fibs.ProjectDesc = {
    name: 'hello-world',
    targets: {
        hello: { type: 'plain-exe', sources: ['hello.c'] }
    }
}