
var rotate = function(nums, k){
	if (nums.length < k) k = k % nums.length;
	const temp = nums.splice(nums.length - k, k);
	nums.unshift(...temp);
}
