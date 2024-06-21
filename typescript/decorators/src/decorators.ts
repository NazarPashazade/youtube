export function logMethod(
  originalMethod: any,
  context: ClassMethodDecoratorContext
) {
  const methodName = String(context.name);

  function newMethod(this: any, ...args: any[]) {
    console.log(`Method ${methodName} called with args: ${args.join(",")}`);

    originalMethod.apply(this, args);

    console.log(`Method ${methodName} finished`);
  }

  return newMethod;
}

export function logClass(
  originalClass: any,
  context: ClassDecoratorContext
): any {
  const className = String(context.name);

  class newClass extends originalClass {
    constructor(...args: any[]) {
      super(...args);
      console.log(`New instance of ${className}`);
    }
  }

  return newClass;
}

export function LogClassWithLevel(level: string) {
  return function logger(
    originalClass: any,
    context: ClassDecoratorContext
  ): any {
    const className = String(context.name);

    class newClass extends originalClass {
      constructor(...args: any[]) {
        super(...args);
        console.log(`${level}: New instance of ${className}`);
      }
    }

    return newClass;
  };
}

export function LogMethodWithLevel(level: string) {
  return function logger(
    originalMethod: any,
    context: ClassMethodDecoratorContext
  ) {
    const methodName = String(context.name);

    function newMethod(this: any, ...args: any[]) {
      console.log(
        `${level}: Method ${methodName} called with args: ${args.join(",")}`
      );

      originalMethod.apply(this, args);

      console.log(`${level}: Method ${methodName} finished`);
    }

    return newMethod;
  };
}

export function addID(originalClass: any, context: ClassDecoratorContext): any {
  const className = String(context.name);

  class newClass extends originalClass {
    constructor(...args: any[]) {
      super(...args);
      this.id = Date.now().toString();
      console.log(`New instance of ${className}`);
    }
  }

  return newClass;
}
