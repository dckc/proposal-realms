import test from 'tape';
import Realm from '../../../../../src/realm';

test('esid: sec-array.prototype.filter', t => {
  t.plan(2);

  const array = [];
  let callCount = 0;
  const CustomCtor = function() {};
  const OObject = new Realm().global.Object;
  const speciesDesc = {
    get() {
      callCount += 1;
    }
  };
  array.constructor = OObject;
  OObject[Symbol.species] = CustomCtor;

  Object.defineProperty(Array, Symbol.species, speciesDesc);

  const result = array.filter(() => undefined);

  t.equal(Object.getPrototypeOf(result), CustomCtor.prototype);
  t.equal(callCount, 0, 'Array species constructor is not referenced');
});