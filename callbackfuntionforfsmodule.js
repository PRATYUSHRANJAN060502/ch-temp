const{readFile ,writeFile}=require('fs')



const first=readFile('./tester/f1/ret.txt','utf8')
const second=readFile('./tester/f2/berlie.txt','utf8')
 
readFile('./tester/f1/ret.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
   const second=result
   writeFile(
    './tester/f1/berlie2.txt',
    `here is the result: ${first},${second}`, (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    }
   )


}
    )
