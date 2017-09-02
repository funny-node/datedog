#!/usr/bin/env node

const datedog = require('../lib/index')
const program = require('commander')

// <必填> [选填]
// option 中一个 -- 对应一个必填项，可以用 program.xx 获取必填项
// 可选项都在 program.args

program
  .version('1.0.0')
  .description('a cli about date')
  .option('-d, --date <dateFrom> [dateTo]', 'calculate the days between `dateFrom` to `dateTo`')
  .option('-a, --daysAgo <days> [dateTo]', 'find the date `daysAgo` days before `Date` whose default is today')
  .option('-s, --daysSince <days> [dateFrom]', 'find the date `daysSince` days after `Date` whose default is today')
  .option('-e, --enjoy [enjoy]') // console.log(program.args)
 

// git 风格
program
  .command('setup')
  .description('run setup command')
  .action(() => {
    console.log('setup')
  })

program
  .command('exec <cmd>')
  .description('run the given command')
  .action(cmd => {
    console.log(cmd)
  })

program 
  .command('teardown <a> <b> [c...]')
  .action((a, b, c) => {
    console.log(a, b)
    if (c) {
      c.forEach(item => {
        console.log(item)
      })
    }
  })

 program
   .command('*')
   .description('deploy the given env')
   .action(env => {
     console.log('deploying "%s"', env);
   });


// 可以通过监听 --help 事件来输出额外的帮助信息
// must be before .parse() since node's emit() is immediate
program.on('--help', function () {
  console.log('')
  console.log('')
  console.log('  Custom Examples:')
  console.log('')
  console.log('    ✍  datedog -d 2014-06-28')
  console.log('    ✍  datedog -s 1314 2014-06-28')
  console.log('    ✍  datedog -a 1 2017-09-01')
  console.log('')
})


program.parse(process.argv)

if (program.date) {
  console.log(datedog.calcDateInterval(program.date, program.args[0]))
} else if (program.daysAgo) {
  console.log(datedog.calcBefore(program.daysAgo, program.args[0]))
} else if (program.daysSince) {
  console.log(datedog.calcAfter(program.daysSince, program.args[0]))
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}