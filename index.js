/*
 * stay-positive
 *
 * A work of the public domain from the Consumer Financial Protection Bureau.
 */

'use strict';

module.exports = function( num, opts ) {
  num = opts && opts.abs && !isNaN( num ) ? Math.abs( num ) : num;
  return parseFloat( num ) <= 0 ? 0 : num;
};
