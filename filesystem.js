const { readFileSync,writeFileSync} = require('fs')

  const first =readFileSync('./tester/f1/ret.txt','utf8')
  console.log(first)
  const second =readFileSync('./tester/f2/berlie.txt','utf-8')
  console.log(second)
  writeFileSync(
'./tester/f2/me.txt',
`here is your result :${first},${second}`,
{  flag:'a'}


  )