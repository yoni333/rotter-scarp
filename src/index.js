const Rotter = require('./c-rotter')
try {
  
  const r = new Rotter(633000,30);
  
  r.loopPages()
  
  } catch (error) {
    console.log(error);
    
  }