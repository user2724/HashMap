//import { linkedList } from "./linkedList"
// Later find a way to import the linkedList from linkedlists.js without copying the entire file

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

first() {
    if (this.head !== null) {
        let current = this.head
       return current
    } else {
        return undefined
    }
}

last() {
   let current = this.head;
   while (current.nextNode !== null) {
    current = current.nextNode
   }
   return current
}

at(index) {
    let count = 0;
    let current = this.head
    while (count < index) {
     count += 1
     current = current.nextNode

    }
    return current
}

pop() {

    if (this.head !== null) {
    let head = this.head
     
     this.head = head.nextNode
     return head
    } else {
        return undefined
    }
}


contains(value) {


/*if (current.value == value) {
    return true
} else if (current.nextNode == null) {
    return false   
} else {
    list.contains(current.nextNode)
}    recursive solution that would have worked perfectly if current wasn't reasigned to this.head every time the function ran. I couldn't figure out how to fix that bug*/
let current = this.head
while (current !== null) {
    if (current.value == value) {
        return true
    }
    current = current.nextNode
}
return false;

}

findIndex(value) {
let current = this.head
let count = 0;


while (current.value !== null)  {
  if (current.value == value) {
  return count
  }
  current = current.nextNode;
  count++;

}


}

toString() {
  let current = this.head;
let string = ""
let string2 = " -> "


  while (current !== null) {
    string += "( " + current.value + " )" + string2
    current = current.nextNode
  }

  return string

} 

removeAt(index) {

let count = 0;
let current = this.head
    while (count < index) {
     count += 1
     current = current.nextNode

    }

let curr = this.head;
    while (curr.nextNode && curr.nextNode.value !== current.value) {
        curr = curr.nextNode;
    }

    if (curr.nextNode) {
        // Point the current node to the one AFTER the target node
        curr.nextNode = curr.nextNode.nextNode;
    }


}

}



const list = new LinkedList();

list.append("dog");
list.append("giraffe");
list.append("cat");
list.append("mouse");
list.append("sloth")
list.append("rabbit")

console.log(list.removeAt(5))
console.log(list);




// Below is hashMap



class HashMap {
    constructor(size = 16) {
        this.buckets = new Array(size)
        this.size = size
        this.loadFactor = 0.75;

    }

hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
    //hashCode = hashCode % this.size;
  }

  return hashCode;
} 

set(key, value) {
  // 1. get bucket index
  let bucket = this.hash(key) % this.size;
  let list = this.buckets[bucket]

  // 2. Create bucket if empty
  if (!list) {
    this.buckets[bucket] = new LinkedList()
    this.buckets[bucket].append( {key, value} )
    return;
  }



  list.append({key, value});
  
}

get(keyInput) {

  // For a given key, I want to return its value pair.
  //Iterate over each node until I find the node that contains the input key
  //Find that key's corresponding value using dot notation or some other syntax

/*let hashArray = Object.entries(test.buckets)
let newArr = []
let keyArr = []


  for (const [key, value] of hashArray) {
  /*console.log(value.head.value.key); // Isolates for just the key in each bucket
  console.log(value.head.value.value) // Isolates for just the value in each bucket
  newArr.push(value.head.value.key)
  keyArr.push(value.head.value.key)
  newArr.push(value.head.value.value)
}

 //Find the keyInput in new arr, and return its corresponding value, which should be in the index directly after it
  
// Use logic in has(key) function to return null if the key is not in the hashmap



let match = newArr.find(n => n === keyInput)
let includes = newArr.includes(match)
let finalIndex = newArr.indexOf(match) + 1

let final = newArr.at(finalIndex)

/*if (includes == true) {
return final
} else {
  return null
}*/

const bucket = this.hash(keyInput) % this.size;
const list = this.buckets[bucket]  // Find the exact linked list that contains keyInput, using this.hash()

if (!list) return null

let node = list.head;

while (node) { // Iterates through the linked list to find the corresponding value
  if (node.value.key === keyInput) {
    return node.value.value
  } 
  node = node.nextNode
}

return null
 
}

has(keyInput) {

  const bucket = this.hash(keyInput) % this.size
  const list = this.buckets[bucket]
  
  if (!list) return false

  let node = list.head

while (node !== null) {
    if (node.value.key == keyInput) {
        return true
    }
    node = node.nextNode
}
return false;


}

remove(keyInput) {

   const bucket = this.hash(keyInput) % this.size
   const list = this.buckets[bucket]

   if (!list) return false

   // If the key does not exist, return "key does not exist"


   if (list.head.value.key === keyInput) {
    list.head = list.head.nextNode
      return true

    }


let node = list.head
let prev = null
while (node !== null && node.value.key !== keyInput) {
  prev = node
  node = node.nextNode
}
  

  }


length() {
 // For each element in the object, iterate through its linked list to see how many items it has
let itemCount = 0

this.buckets.forEach(element => {
  
let node = element.head

while(node) {
  itemCount += 1;
  node = node.nextNode
}


});

return itemCount

}

clear() {

  this.buckets = []

}

keys() {

  let arr = []

  this.buckets.forEach(element => {
  
let node = element.head

while(node) {
  arr.push(node.value.key)
  node = node.nextNode
}
  });

return arr

}

values() {
  let arr = []

this.buckets.forEach(element => {

let node = element.head

while(node) {
  arr.push(node.value.value)
  node = node.nextNode
}

})

return arr

}

entries() {

let arr = []

let keys = this.keys()
let values = this.values()

this.buckets.forEach(element => {

let node = element.head

while(node) {
  let newArr = []
  newArr.push(node.value.key, node.value.value)
  console.log(newArr)
  node = node.nextNode
  arr.push(newArr)
}


})


return arr

}


}



const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')


console.log(test.get('grape'))
console.log(test.entries())
console.log(test)


