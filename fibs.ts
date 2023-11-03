import * as fibs from 'https://deno.land/x/fibs@v1.6.0/mod.ts'
//import * as fibs from '../fibs/mod.ts';

if (import.meta.main) fibs.main();

export const project: fibs.ProjectDesc = {
    name: 'hello-world',
    targets: [
        {
            name: 'hello',
            type: 'plain-exe',
            sources: () => ['hello.c']
        }
    ],
    // add optional WASI platform support
    imports: [
        {
            name: 'platforms',
            url: 'https://github.com/floooh/fibs-platforms',
            import: [ 'wasi.ts' ],
        },
    ],
}
