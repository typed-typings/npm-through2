// Type definitions for through2 v 2.0.0
// Project: https://github.com/rvagg/through2
// Original Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>, Georgios Valotasios <https://github.com/valotas>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import * as stream from 'stream';

declare function through2(transformFunction?: through2.TransformFunction, flushFunction?: through2.FlushCallback): NodeJS.ReadWriteStream;
declare function through2(options?: through2.Options, transformFunction?: through2.TransformFunction, flushFunction?: through2.FlushCallback): NodeJS.ReadWriteStream;

declare namespace through2 {

  export type TransformCallback = (err?: any, data?: any) => void;
  export type TransformFunction = (chunk: any, encoding: string, callback: TransformCallback) => void;
  export type FlushCallback = (flushCallback: () => void) => void;

  export interface Options extends stream.DuplexOptions {}

  export function ctor(options?: Options, transformFunction?: TransformFunction, flushFunction?: FlushCallback): NodeJS.ReadWriteStream;
  export function obj(transformFunction?: TransformFunction, flushFunction?: FlushCallback): NodeJS.ReadWriteStream;

  /**
   * Type of `this` inside TransformFunction and FlushCallback.
   */
  export interface This {
    push(data: any): void;
  }
}

export = through2;
