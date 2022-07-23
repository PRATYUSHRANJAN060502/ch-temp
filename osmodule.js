const os=require('os')

const info=os.type()
console.log(info)
const osinfo={
 version :os.release(),
 user:os.userInfo(),
 freeSpace:os.freemem(),
 totalspace:os.totalmem(),
 network:os.networkInterfaces()


}
console.log(osinfo)