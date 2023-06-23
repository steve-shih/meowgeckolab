module.exports = {
    apps: [
      {
        name: 'genemeow', // 应用名，自定义即可
        cwd: 'D:\PG\sideproject\meowgeckolab\meowgecko',
        script: 'npm', // 指定运行脚本的命令
        args: 'run dev', // 要运行的命令参数
        watch: false, // 监视文件变化并自动重启，默认为 false
        autorestart: true, // 发生错误时自动重启，默认为 true
        env: {
          NODE_ENV: 'development', // 设置环境变量
        },
      },
    ],
  };
  