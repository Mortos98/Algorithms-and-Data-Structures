function Stack() {
  this.dataStore = []
  this.top = 0
}

function push(elt) {
  this.dataStore[this.top++] = elt
}

function pop(elt) {
  if (this.top > 0) {
    return this.dataStore[--this.top]
  }
  else {
    return null
  }
}

function peek() {
  if (this.top > 0) {
    return this.dataStore[this.top - 1]
  }
  else {
    return null
  }
}

function clear(){
  this.top = 0
}

function main() {
  s = new Stack()
  s.push("David")
  s.push("Raymond")
  s.push("Bryan")
  console.log("length: " + s.length())
  console.log(s.peek())
  var popped = s.pop()
  console.log("The popped element is: " + popped)
  console.log(s.peek())
  s.push("Cynthia")
  console.log(s.peek())
  s.clear()
  console.log("length: " + s.length())
  console.log(s.peek())
  s.push("Clayton")
  console.log(s.peek())
}