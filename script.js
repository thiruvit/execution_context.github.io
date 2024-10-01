
var firstMessage="Hi";
var lastMessage=" everyone";

function getMessage() {
    console.log("Message: " +firstMessage);
}
getMessage();
var message=firstMessage+lastMessage;
console.log(message);


//Global Execution Context

//Creation Phase

GEC:{
    LEC:{
        ER:{
               firstMessage:undefined;
               lastMessage:undefined;
        }
        outer:null;
        this:window Object;``
    }
    VE:{
        ER:{
                message:undefined;
        }
    }
}
//Execution Phase

GEC:{
    LEC:{
        ER:{
               firstMessage:"Hi";
               lastMessage:"everyone";
        }
        outer:null;
        this:window Object;
    }
    VE:{
        ER:{
                 message:Hi everyone;
        }
    }
}

//Function Execution Context

//Creation Phase

GEC:{
    LEC:{
        ER:{

                 firstMessage:undefined;
        }
        outer:GEC;
        this:window Object;
    }
}

//Execution Phase

GEC:{
    LEC:{
        ER:{
                  firstMessage:Hi;
        }
        outer:GEC;
        this:window Object;
    }
}



