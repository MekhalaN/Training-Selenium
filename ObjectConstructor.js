function Createtool(name, version, languages){
     this.name = name;
     this.version = version;
     this.languages = languages;
    
     this.start=function(){
            console.log(this.name+" is started");              
   },
      this.stop=function(){
            console.log(this.name+" is stopped");
             
   }
}
   let tool = new Createtool("Selenium",4,["java","js","python","ruby","c#"]);
   let tool2 = new Createtool("playwright",4,["java","js","python","ruby","c#"]);

console.log(tool["name"]);
console.log(tool["version"]);
console.log(tool.name);
console.log(tool.version);
console.log(tool.languages);

tool.start()
tool2.start()

tool.stop()
tool2.stop()