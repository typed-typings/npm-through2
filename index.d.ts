// Type definitions for through2 v 2.0.0
// Project: https://github.com/rvagg/through2
// Original Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>, Georgios Valotasios <https://github.com/valotas>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import stream = require('stream');

type TransformCallback = (err?: any, data?: any) => void;
type TransformFunction = (chunk: any, encoding: string, callback: TransformCallback) => void;
type FlushCallback = (flushCallback: () => void) => void;

declare function through2(transformFunction?: TransformFunction, flushFunction?: FlushCallback): NodeJS.ReadWriteStream;
declare function through2(options?: stream.DuplexOptions, transformFunction?: TransformFunction, flushFunction?: FlushCallback): NodeJS.ReadWriteStream;

declare namespace through2 {
  export function ctor(options?: stream.DuplexOptions, transformFunction?: TransformFunction, flushFunction?: FlushCallback): NodeJS.ReadWriteStream;
  export function obj(transformFunction?: TransformFunction, flushFunction?: FlushCallback): NodeJS.ReadWriteStream;

  /**
   * Type of `this` inside TransformFunction and FlushCallback.
   */
  export interface This {
    push(data: any): void;
  }
}

export = through2;
