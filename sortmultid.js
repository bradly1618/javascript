var arr = [[12, 'AAA'], 
		[12, 'BBB'], 
		[12, 'CCC'],
		[28, 'DDD'], 
		[18, 'CCC'],
		[12, 'DDD'],
		[18, 'CCC'],
		[28, 'DDD'],
		[28, 'DDD'],
		[58, 'BBB'],
		[68, 'BBB'],
		[78, 'BBB']];

arr.sort(function(a,b) {
    return a[1].localeCompare(b[1]) || a[0]-b[0] 
});
 
 
console.log(arr);

/**
 used this to display in Adobe LiveCycle JS
for(i=0; i<=arr.length; i++){

	xfa.resolveNode("Form.bdyMain.frmTableIreland.test.TextField1").rawValue += arr[i];

};

*/
/**  Simple SOrt */
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});

