import * as fibs from 'https://raw.githubusercontent.com/floooh/fibs/main/mod.ts'
//import * as fibs from '../fibs/mod.ts';

export const project: fibs.ProjectDesc = {
    name: 'hello-world',
    targets: {
        hello: { type: 'plain-exe', sources: ['hello.c'] }
    }
}