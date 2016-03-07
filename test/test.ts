/// <reference path="../bundle.d.ts" />

import * as through2 from 'through2';

let result: NodeJS.ReadWriteStream = through2({}, function() { }, (function() { }));

result = through2.ctor({}, function() { }, (function() { }));
result = through2.obj(function() { }, (function() { }));

console.log('DONE');
