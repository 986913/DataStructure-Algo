/**
 * @fileoverview Diamond problem simulation

  Examples
    In the following examples, spaces are indicated by · characters.

    Diamond for letter 'A':
      A

    Diamond for letter 'C':
      ··A··
      ·B·B·
      C···C
      ·B·B·
      ··A··

    Diamond for letter 'E':
      ····A····
      ···B·B···
      ··C···C··
      ·D·····D·
      E·······E
      ·D·····D·
      ··C···C··
      ···B·B···
      ····A····
 */

# ###################################  (仿真题) ##################################
# 不变量 A：图形对称性（Symmetric Guarantee）
#   - 这保证了无论循环进行到哪一步，top 和 bottom 永远关于中心轴轴对称。因此 res[top] 和 res[bottom] 的内容必然完全相同。
#
# 不变量 B：字符与曼哈顿距离的几何映射（Geometric Mapping）
#   - 在第 top 次迭代中：两个字符出现的位置距中心点 mid 的距离恒等于 top。即位置必定落在：mid - top 和 mid + top。这保证了从上到下，字母会以每步 1 个单位的速度向两边扩张，形成完美的钻石斜线。
#
# 不变量 C：区间覆盖不变量（State Invariant）
#   - 在每次循环体执行前：数组 res 的 [0, top-1] 闭区间 和 [bottom+1, total_len-1] 闭区间已经被完全且正确地填充。
# #################################################################################
def diamond(letter):
    total_len =  2 * (ord(letter) - ord('A')) + 1
    
    top = 0
    bottom = total_len -1
    mid = total_len//2

    res = [''] * total_len
    
    while top<=bottom:
        row = [' '] * total_len
        curChar = chr(top + ord('A'))
        row[mid-top]=curChar
        row[mid+top]=curChar

        row_str = "".join(row)
        res[top] = row_str
        res[bottom] = row_str
        top+=1
        bottom-=1

    # print(res)
    return res