/**
 * <Text> 组件，用于移动端页面中自适应调整字体大小
 * 使用注意点：
 * （1）父元素需要有自己的宽和高，不能依靠里面的内容撑起宽和宽；
 * （2）字体最小为10px，需注意在rem布局下，如果字数较多可能出现字体特别小的情况
 * 使用示例：<Text>这是一段比较长的文字</Text>
 * Created by user on 2021-03-18
 * Updated by user2 on 2021-03-20
 */
// bad
const sum = 1 + 2;

// good
const sum = 1 + 2;

let newsList = []; // 新闻列表数据

/**
 * 页面初始化时先设置一个默认title，以防标题空白
 * 通过接口获取到配置后重新调用setTitle()函数
 * 其他说明情况
 */
setTitle();

/**
 * Add two numbers.
 * @param {number} a 求和数
 * @param {number} b 求和数
 * @returns void
 */
function add(a, b) {
    console.log(a + b);
}
