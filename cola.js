class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class queue{
    constructor(){
        this.head = null;
        this.last = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    enqueue(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next= node;
        }
        this.last = node;
        this.size++;
    }

    front(){
        if(this.isEmpty())
            return null;
        else
            return this.head.data;
    }

    printAll(){
        if(this.isEmpty())
            console.log("La cola está vacía");
        else{
        let current = this.head;
        let result = "";
        while(current){
            result = result + current.data + " ";
            current = current.next;
            }
        console.log(result + "Null");
        }
    }

    end(){
        if(this.isEmpty())
            return null;
        else
            return this.last.data;
    }

    dequeue(){
        if(this.isEmpty())
            console.log("La cola está vacía");
        else{
            this.head = this.head.next;
            this.size--;
            if(this.size === 0)
                this.last = null;
        }
    }

    destroy(){
        while(this.isEmpty() === false){
            this.dequeue();
        }
    }
}

let cola = new queue();
console.log(cola.isEmpty());
cola.enqueue(4);
cola.enqueue(45);
cola.enqueue(87);
cola.enqueue(90);
console.log("El frente de la cola es",cola.front());
cola.printAll();
console.log("El tamaño de la cola es",cola.getSize());
console.log("El final de la cola es",cola.end());
cola.dequeue();
cola.dequeue();
cola.dequeue();
cola.dequeue();
console.log("El frente de la cola es",cola.front());
console.log("El final de la cola es",cola.end());