var _ = require('../underscoreSample.js');

describe("Object creator", function() {
	it("returns an oject", function() {
		expect(_.object()).toEqual({});
	});

	it("returns an empty object from a single empty array arguments", function() {
		expect(_.object([])).toEqual({});
	});

	it("returns an object with empty values from two empty array arguments", function() {
		expect(_.object([],[])).toEqual({});
	});

	it("returns an undefined object from a single argument of an array of numbers", function() {
		expect(_.object([1,2,3,4])).toEqual({ undefined: undefined });
	});

	it("returns an empty object from an empty array and array of strings arguments", function() {
		expect(_.object([],["one", "two", "three", "four"])).toEqual({});
	});

	it("returns an object with string keys and values from a single array of strings", function() {
		expect(_.object(["one", "two", "three", "four", "five"])).toEqual({ o: 'n', t: 'h', f: 'i' });
	});

	it("returns an object with undefined values from an array of strings and an empty array.", function() {
		expect(_.object(["one", "two", "three", "four"], [])).toEqual({ one: undefined, two: undefined, three: undefined, four: undefined });
	});

	it("returns an object from an array of strings", function() {
		expect(_.object([1, 2, 3, 4],["one", "two", "three", "four"])).toEqual({1:"one", 2:"two", 3:"three", 4:"four"});
	});

	it("returns an object from two arguments of an array of numbers and an array of booleans", function() {
		expect(_.object([0, 1, 2, 3], [true, false, true, false])).toEqual({0: true, 1: false, 2: true, 3: false});
	});

	it("returns an object from a single array argument with nested array values", function() {
		expect(_.object([[1, "yes"], [2, "no"], [3, "maybe"], [4, "because"]])).toEqual({1: "yes", 2: "no", 3: "maybe", 4: "because"});
	});

	//for this last test, even though the test result matches with my expected result, it doesn't pass (I even copied-pasted).
	//I'm guessing this is because of the function?
		it("returns an array with key-value pairs from an array of nested key-value pairs", function() {
		expect(_.object([["first", 1], ["objectMethod", function () { return 123;}], ["bool", true], ["objArray", [1,2,3]]])).toBe(
				{ first: 1, objectMethod: Function, bool: true, objArray: [ 1, 2, 3 ] });
	});
});