var name = "Thiru";
let role = "Coffee Shop Manager";

function CoffeeShop(){
    let shopName = "Cafe Wild Beans";
    const menu = ["Espresso", "Latte", "Cappuccino"];

    const employeeProfile = name + " - " + role;

    console.log(employeeProfile);

    function dailySales(){
        let cupsSold = "50";
        let averagePrice = "4";

        console.log(cupsSold * averagePrice);
    }
    dailySales();
}
CoffeeShop();


/*
GLOBAL EXECUTION CONTEXT

CREATION PHASE

GlobalExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        name : undefined,(Declarative)
        role :declared but not initialized.(Declarative)
        function:CoffeeShop();(Object)
     },
     outer: null
     ThisBinding: window object
    }
}

EXECUTION PHASE

GlobalExecutionContext={
    LexicalEnvironment:{
      EnvironmentRecord:{
         name : "Thiru"
         role : "Coffee Shop Manager"
         function:CoffeeShop();
      },
      outer: null
      ThisBinding: window object
    }
}



FUNCTION EXECUTION CONTEXT-CoffeeShop()

CREATION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        shopName : declared but not initialized.(declarative)
        menu : declared but not initialized.(object)
        employeeProfile : declared but not initialized.(object)
        function:dailySales() (object)
     },
     outer: GlobalExecutionContext
     ThisBinding: CoffeeShop()
    }
}


EXECUTION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        shopName : "Cafe Wild Beans" (declarative)
        menu :["Espresso", "Latte", "Cappuccino"] (object)
        employeeProfile : "Thiru - Coffee Shop Manager" (object)
        console.log(employeeProfile); // output "Thiru - Coffee Shop Manager"
        function:dailySales() (object)
     },
     outer: GlobalExecutionContext
     ThisBinding: CoffeeShop()
    }
}



FUNCTION EXECUTION CONTEXT-dailySales()

CREATION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        cupsSold : declared but not initialized. (declarative)
        averagePrice : declared but not initialized. (declarative)
     },
     outer: CoffeeShop() Execution Context
     ThisBinding: dailySales()
    }
}

EXECUTION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        cupsSold : "50"  (declarative)
        averagePrice : "4"  (declarative)
        console.log(cupsSold * averagePrice); // outputs 200
     },
     outer: CoffeeShop() Execution Context
     ThisBinding: dailySales()
    }
}

*/
