import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

async function fileReadtoArray (filepath) {
    try {
        const fp = resolve(filepath);
        const data = await readFile(fp, { encoding: 'utf8' });
        return data.split('\n');
    } catch (err) {
        console.log(err.message);
        return;
    }
};

export { fileReadtoArray };

//output of fileRead[0] is "hello"