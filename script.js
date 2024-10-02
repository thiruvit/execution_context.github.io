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
        Type:"Object",
        name : undefined,
        role :undefined
     },
     outer: null
     ThisBinding: window object
    },
    VariableEnvironment:{
     EnvironmentRecord:{
        Type:"Object"
     },
     outer:null,
     ThisBinding:window object
    }
}

EXECUTION PHASE

GlobalExecutionContext={
    LexicalEnvironment:{
      EnvironmentRecord:{
         Type:"Object",
         name : "Thiru",
         role : "Coffee Shop Manager"
      },
      outer: null
      ThisBinding: window object
    },
    VariableEnvironment:{
     EnvironmentRecord:{
        Type:"Object"
     },
     outer:null,
     ThisBinding:window object
    }
}



FUNCTION EXECUTION CONTEXT-CoffeeShop()

CREATION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        Type:"Declarative"
        shopName : undefined,
        menu : undefined,
        employeeProfile : undefined(object)
     },
     outer: GlobalExecutionContext
     ThisBinding: CoffeeShop()
    },
    VariableEnvironment:{
     EnvironmentRecord:{
        Type:"Declarative"
     },
     outer:GlobalExecutionContext,
     ThisBinding: CoffeeShop()
}


EXECUTION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        Type:"Declarative",
        shopName : "Cafe Wild Beans" ,
        menu :["Espresso", "Latte", "Cappuccino"] ,
        employeeProfile : "Thiru - Coffee Shop Manager" 
     },
     outer: GlobalExecutionContext
     ThisBinding: CoffeeShop()
    },
    VariableEnvironment:{
     EnvironmentRecord:{
        Type:"Declarative"
     },
     outer:GlobalExecutionContext,
     ThisBinding: CoffeeShop()
}



FUNCTION EXECUTION CONTEXT-dailySales()

CREATION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        Type="Declarative",
        cupsSold : not defined,
        averagePrice : not defined
     },
     outer: CoffeeShop() 
     ThisBinding: dailySales()
    },
    VariableEnvironment:{
     EnvironmentRecord:{
        Type:"Declarative"
     },
     outer: CoffeeShop(),
     ThisBinding: dailySales()
}

EXECUTION PHASE

FunctionExecutionContext={
   LexicalEnvironment:{
     EnvironmentRecord:{
        Type:"Declarative",
        cupsSold : "50",
        averagePrice : "4",
     },
     outer: CoffeeShop(),
     ThisBinding: dailySales()
    },
    VariableEnvironment:{
     EnvironmentRecord:{
        Type:"Declarative"
     },
     outer: CoffeeShop(),
     ThisBinding: dailySales()
}

*/
