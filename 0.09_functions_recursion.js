// A recursive function is a function that calls itself, either directly or indirectly

var hanoi = function (disc, src, aux, dst) {
if (disc > 0) {
hanoi(disc - 1, src, dst, aux);
console.log('Move disc ' + disc +
' from ' + src + ' to ' + dst);
hanoi(disc - 1, aux, src, dst);
}
};
hanoi(3, 'Src', 'Aux', 'Dst');


// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.
var walk_the_DOM = function walk(node, func) {
func(node);
node = node.firstChild;
while (node) {
walk(node, func);
node = node.nextSibling;
}
};
// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.

var getElementsByAttribute = function (att, value) {
var results = [];
walk_the_DOM(document.body, function (node) {
var actual = node.nodeType === 1 && node.getAttribute(att);
if (typeof actual === 'string' &&
(actual === value || typeof value !== 'string')) {
results.push(node);
}

});
return result;

};


// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.
// JavaScript does not currently optimize this form.

// TODO, learn how this works
var factorial = function factorial(i, a) {
a = a || 1;
if (i < 2) {
return a;
}
return factorial(i - 1, a * i);
};
console.log(factorial(4)); // 24



