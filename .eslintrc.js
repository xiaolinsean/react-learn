module.exports = {
    extends: ['alloy', 'alloy/react'],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        browser: true,
        node: true,
        es6: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
        'no-invalid-this': 'off', // 不检查 this 指向，避开箭头函数和 react 中的 this
        'react/no-unsafe': 'off',
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
