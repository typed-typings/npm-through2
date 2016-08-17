/// <reference path="../bundle.d.ts" />

import through2 = require('through2');

let rws: NodeJS.ReadWriteStream;

rws = through2(
  {
    objectMode: true,
    allowHalfOpen: true
  },
  function(entry: any, enc: string, callback: () => void) {
    (<through2.This>this).push('foo');
    callback();
  },
  () => {
  });

rws = through2(
  function(entry: any, enc: string, callback: () => void) {
    (<through2.This>this).push('foo');
    callback();
  },
  () => {
  });

rws = through2(
  function(entry: any, enc: string, callback: (error: any, data?: any) => void) {
    callback(null, 'foo');
  },
  (flushCallback: () => void) => {
    flushCallback();
  });

rws = through2(function(entry: any, enc: string, callback: () => void) {
  (<through2.This>this).push('foo');
  callback();
});

rws = through2();

// ctor
rws = through2.ctor(
  {
    objectMode: true,
    allowHalfOpen: true
  },
  function(entry: any, enc: string, callback: () => void) {
    (<through2.This>this).push('foo');
    callback();
  },
  () => {
  });

// obj
rws = through2.obj(
  function(entry: any, enc: string, callback: () => void) {
    (<through2.This>this).push('foo');
    callback();
  },
  () => {

  });

rws = through2.obj(
  function(entry: any, enc: string, callback: () => void) {
    (<through2.This>this).push('foo');
    callback();
  });

rws = through2.obj(
  function(entry: any, enc: string, callback: (err: any) => void) {
    callback('Oups!');
  },
  (flashCallback) => {
    flashCallback();
  });

console.log('DONE');
