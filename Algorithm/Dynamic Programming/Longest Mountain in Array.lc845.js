/*******************************Solution 1: DP ****************************************/
class Solution {
    public int longestMountain(int[] arr) {
        int res = 0, up = 0, down = 0, n = arr.length;

        for (int i = 1; i < n; i++) {
            // 从递减变成递增,重新开始计数
            if ((down != 0 && arr[i] > arr[i - 1]) || (arr[i - 1] == arr[i])) {
                up = down = 0;
            }

            // 递增数列
            if (arr[i] > arr[i - 1]) {
                up++;
            }
            // 递减数列
            if (arr[i] < arr[i - 1]) {
                down++;
            }

            if (up > 0 && down > 0) {
                res = Math.max(res, up + down + 1);
            }
        }

        return res;
    }
}

/*******************************Solution 2: Two pointer ****************************************/
class Solution {
    public int longestMountain(int[] arr) {
        int[] up = new int[arr.length];
        int[] down = new int[arr.length];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                up[i] = up[i - 1] + 1;
            }
        }

        int res = 0;
        for (int i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > arr[i + 1]) {
                down[i] = down[i + 1] + 1;
            }

            if (up[i] != 0 && down[i] != 0) {
                res = Math.max(res, up[i] + down[i] + 1);
            }
        }

        return res;
    }
}