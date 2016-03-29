
var fs        = require("fs");
var path      = require("path");
var ctrl = {};

function readDir(dir){//读取目录
    fs.readdirSync(dir)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var t = fs.lstatSync(path.join(dir, file));//读取文件信息
        if(t.isDirectory()){//判断是否文件夹，如果是文件夹，则递归读取
        // console.log("dir",file)
            readDir(path.join(dir, file));
        }else{//如果是文件，则读取js模块
            var model = require(path.join(dir, file));
        var str = path.relative(__dirname, dir);
            // var str = dir.replace(__dirname,"").replace(/^\//,"");//截取文件相对路径
            if(str){//如果不是根目录，读取相对路径值
                var floder = str.split(path.sep);
                //根据路径拼装controller对象
                var tc = ctrl[floder[0]] = ctrl[floder[0]]||{};
                for(var i=1;i<floder.length;i++){
                    tc = ctrl[floder[i-1]][floder[i]] = {};
                }
                tc[path.basename(file,".js")] = model;
            }else{
                ctrl[path.basename(file,'.js')] = model;
            }
        // console.log(str);
        }
        
    });
}
readDir(__dirname);
module.exports = ctrl;