const {predHand, historyPredHand} = require("./handler");

const routes =[
  { 
    method:"POST",
    path:"/predict",
    handler:predHand,
    options:{
      payload:{
        allow: "multipart/form-data",
        multipart: true,
      },
    },
  },

  {
    method: "GET",
    path: "/predict/histories",
    handler: historyPredHand,
  }

];

module.exports = routes;
