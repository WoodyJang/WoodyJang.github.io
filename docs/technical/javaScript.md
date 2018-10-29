# JavaScript 是传值调用还是传引用调用？


## 1. 传值还是传引用？
直接看题目：

```javascript
function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);    
console.log(obj2.item);
```
输出结果是什么？

要弄清楚这个问题，首先我们要明白到底什么是传值调用（Call-ny-value）和传引用调用（Call-by-reference）。

### 1.1. 传值调用（Pass by value）
在传值调用中，传递给函数参数是函数被调用时所传实参的拷贝。在传值调用中实际参数被求值，其值被绑定到函数中对应的变量上（通常是把值复制到新内存区域）。

即 changeStuff 的参数 a b c 是 num1 obj1 obj2 的拷贝。所以无论 a b c 怎么变化，num1 obj1 obj2 都保持不变。


### 1.2. 传引用调用（Pass by reference）
在传引用调用调用中，传递给函数的是它的实际参数的隐式引用而不是实参的拷贝。通常函数能够修改这些参数（比如赋值），而且改变对于调用者是可见的。

也就是说 changeStuff 函数内的 a b c 都分别与 num obj1 obj2 指向同一块内存，但不是其拷贝。函数内对 a b c 所做的任何修改，都将反映到 num obj1 obj2 上 。


从上面的代码可以看出，JavaScript 中函数参数的传递方式既不是传值，也不是传引用。主要问题出在 JS 的引用类型上面。

JS 引用类型变量的值是一个指针，指向堆内存中的实际对象。

### 1.3. 传共享调用（Call by sharing）
还有一种求值策略叫做**传共享调用（Call-by-sharing/Call by object/Call by object-sharing）**。

传共享调用和传引用调用的不同之处是，该求值策略传递给函数的参数是对象的引用的拷贝，即对象变量指针的拷贝。

也就是说， a b c 三个变量的值是 num obj1 obj2 的指针的拷贝。 a b c 的值分别与 num obj1 obj2 的值指向同一个对象。函数内部可以对 a b c 进行修改可重新赋值。

```javascript
function changeStuff(a, b, c) {
  a = a * 10; // 对 a 赋值，修改 a 的指向，新的值是 a * 10
  b.item = "changed"; // 因为 b 与 obj1 指向同一个对象，所以这里会修改原始对象 obj1.item 的内容
  c = {item: "changed"}; // 对 c 重新赋值，修改 c 的指向，其指向的对象内容是 {item: "changed"}
}
```

## 2 代码分析
接下来让我们再来分析一下代码。

### 2.1 变量初始化

```javascript
var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};
```
![2](https://camo.githubusercontent.com/e52954db2af54e73761dda4813de1ebb85a04eca/687474703a2f2f6f683179776a7971662e626b742e636c6f7564646e2e636f6d2f626c6f672f323031372d30322d31392d49732d4a6176615363726970742d612d706173732d62792d7265666572656e63652d6f722d706173732d62792d76616c75652d6c616e67756167652d322e706e67)

2.2 调用函数

```javascript
changeStuff(num, obj1, obj2);
```

![3](https://camo.githubusercontent.com/a1c778280c8be3e39fc6b4e5cb8353cc1be08af2/687474703a2f2f6f683179776a7971662e626b742e636c6f7564646e2e636f6d2f626c6f672f323031372d30322d31392d49732d4a6176615363726970742d612d706173732d62792d7265666572656e63652d6f722d706173732d62792d76616c75652d6c616e67756167652d332e706e67)

可以看到，变量 a 的值就是 num 值的拷贝，变量 b c 分别是 obj1 obj2 的指针的拷贝。

函数的参数其实就是函数作用域内部的变量，函数执行完之后就会销毁。

### 2.3 执行函数体

```javascript
a = a * 10;
b.item = "changed";
c = {item: "changed"};
```
![5](https://camo.githubusercontent.com/3a91a6fb0ba0c3d2414389f6d8f0b5cc551515f4/687474703a2f2f6f683179776a7971662e626b742e636c6f7564646e2e636f6d2f626c6f672f323031372d30322d31392d49732d4a6176615363726970742d612d706173732d62792d7265666572656e63652d6f722d706173732d62792d76616c75652d6c616e67756167652d352e706e67)

如图所示，变量 a 的值的改变，并不会影响变量 num。

而 b 因为和 obj1 是指向同一个对象，所以使用 b.item = "changed"; 修改对象的值，会造成 obj1 的值也随之改变。

由于是对 c 重新赋值了，所以修改 c 的对象的值，并不会影响到 obj2。

## 3. 结论
最终的输出结果应该是：

```javascript
10
changed
unchanged
```

从上面的例子可以看出，对于 JS 来说：

基本类型是传值调用
引用类型传共享调用
传值调用本质上传递的是变量的值的拷贝。

传共享调用本质上是传递对象的指针的拷贝，其指针也是变量的值。所以传共享调用也可以说是传值调用。

所以《JavaScript 高级程序设计》说 JavaScript 参数传递都是按值传参 也是有道理的。

##### 参考文档: 

[Is JavaScript a pass-by-reference or pass-by-value language?
](https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language)

[JavaScript 是传值调用还是传引用调用？](https://zhuanlan.zhihu.com/p/25314908?refer=nodejh)