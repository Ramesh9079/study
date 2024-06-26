//  Immediately Invoked Function Expression (IIFE)

 (function chai() {
    // named IIFE
    console.log(`DB Connected`)
 })();

//  ()() To prevent the global scope pollution => IIFE is used.  

((name)=>{
    console.log(`DB connected Two ${name}`)
})("ramesh");