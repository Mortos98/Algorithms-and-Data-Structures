//create a stack class with an array and top tracker
class Stack {
    array: any[];
    top: 0;

  //create a constructor for the stack
  constructor() {
    this.array = [];
    this.top = 0;
  }

  //add a value to the top of the stack
  push(value:any) {
    this.array[this.top] = value;
    this.top++;
  }

  //remove a value from the top of the stack
  pop() {
    if (this.top === 0) {
      return undefined;
    }
    this.top--;
    return this.array.pop();
  }

  //return the length of the stack
  length() {
    return this.top;
  }

  //return the value at the top of the stack
  peek() {
    return this.array[this.top - 1];
  }

  //return the stack as a string
  print() {
    let result = "the current contents of the stack are:";
    for (let i = 0; i < this.top; i++) {
      result += this.array[i] + " ";
    }
    return result;
  }

  //return the stack as an array
  toArray() {
    return this.array;
  }

}

//create a new stack
const myStack = new Stack();

//add values to the stack
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);

console.log(myStack.print());

//remove a value from the stack
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())

console.log(myStack.print());