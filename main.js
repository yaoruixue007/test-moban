#!/usr/bin/env node

const { program } = require('commander')
const download = require('download-git-repo')
const fs = require('fs')
console.log(process.cwd())


program
    .version('0.1.0')  // --version 版本
    .command('create <productName> [branch]') // 初始化命令
    .description('初始化项目文件')
    .action( (name, branch) => { // 得到name
        const mkPath = process.cwd() + '\\' + name
        const isCreate = fs.existsSync(mkPath)
        if (isCreate) {
            fs.rmdirSync(mkPath)
        } 
        fs.mkdirSync(mkPath)
        
        download("direct:https://github.com/yaoruixue007/test-moban/archive/refs/heads/main.zip", mkPath, // 目标路径
            (err)=>{ // 回调函数
                console.log(err)
            })
        console.log('Hello World') // 进行输出
    })

program.parse(process.argv) // 解析变量