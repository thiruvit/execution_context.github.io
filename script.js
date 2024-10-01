
var firstMessage="Hi";
var lastMessage=" everyone";
var message=firstMessage+lastMessage;

function getMessage() {
    console.log("Message: " +message);
}
getMessage();

//Global Execution Context

Creation Phase

GEC{
    LEC{
        ER{
           declaration:
               firstMessage:undefined;
               lastMessage:undefined;
        }
        outer:null;
        this:window Object;
    }
    VE{
        ER{
            declaration:
                message:undefined;
        }
    }
}
Execution Phase

GEC{
    LEC{
        ER{
           declaration:
               firstMessage:"hi";
               lastMessage:"everyone";
        }
        outer:null;
        this:window Object;
    }
    VE{
        ER{
            declaration:
                 message:firstMessage+lastMessage;
        }
    }
}

Function Execution Phase

Creation Phase

GEC{
    LEC{
        ER{
            declaration:
                 message:undefined;
        }
        outer:GEC;
        this.getMessage;
    }
}

Execution Phase

GEC{
    LEC{
        ER{
            declaration:
                  message:Hi everyone;
        }
    }
}


