class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    push(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let current = this.head;
            node.next = current;
            this.head = node;
        }
        this.size++;
    }

    peek(){
        if(this.isEmpty())
            return null;
        else
            return this.head.data;
    }

    pop(){
        if(this.isEmpty())
            console.log("Error al eliminar el tope La pila, está vacía");
        else{
            this.head = this.head.next;
            this.size--;
        }
    }

    printAll(){
        if(this.isEmpty()){
            console.log("La pila está vacía");
        }else{
            let current = this.head;
            let result = "";
            while(current){
                result = result + current.data + " ";
                current = current.next;
            }
            console.log(result);
        }
    }
}

let pila = new Stack();
console.log(pila.isEmpty());
pila.push("Nicolas");
pila.push("Cesar");
pila.push("José");
pila.push("Joe");
console.log("El tope de la pila es",pila.peek());
console.log("El tamaño de la pila es",pila.getSize());
pila.printAll();
pila.pop();
pila.pop();
pila.pop();
pila.pop();
pila.printAll();
pila.pop();
console.log("El tope de la pila es",pila.peek());