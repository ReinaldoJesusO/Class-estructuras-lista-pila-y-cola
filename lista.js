//Creamos un nodo

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
    }

    getSize(){
        return this.size;
    }    

    isEmpty(){
        return this.size === 0;
    }

    insertFirst(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertLast(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insert(data, index){
        if (index < 0 || index > this.size){
            console.log("Índice inválido");
            return;
        }
        if (index === 0){
            this.insertFirst(data);
        } else {
            const node = new Node(data);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeIndex(index){
        if (index < 0 || index >= this.size) {
            console.log("Índice inválido.");
            return null;
        }
        if (index === 0){
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                 prev = prev.next;
            }
            prev.next = prev.next.next;
        }
        this.size--;
    }

    searchIndex(index){
        if (index < 0 || index > this.size) {
            console.log("Índice inválido.");
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current.data;
    }

    printAll(){
        if (this.isEmpty()){
            console.log("La lista está vacía");
           
        } else {
            let current = this.head;
            let result = "";
            while(current){
                result += current.data + ' -> ';
                current = current.next;
            }
            console.log(result + ' null')
        }
        
    }

    searchValue(data){
        if(this.isEmpty())
           console.log("La lista está vacía");
        else{
            let current = this.head;
            let i = 0;
            while(current){
                if(current.data === data){
                   console.log("El valor se encuentra en el índice",i);
                   return;
                }
                current = current.next;
                i++;
            }
            console.log("El elemento no se encuentra en la lista");
        }
    }

    removeValue(data){
        if(this.isEmpty())
           console.log("La lista está vacía");
        else{
            if(this.head.data === data){
                this.head = this.head.next;
                this.size--;
            }else{
                let prev = this.head;
                let current = prev.next;
                while(current){
                    if(current.data === data){
                        prev.next = current.next;
                        this.size--;
                        return;
                    }
                    prev = current;
                    current = current.next;
                }
                if(!current)
                    console.log("El valor que desea eliminar no se encuentra en la lista");
            }
        }
    }

}

let lista = new LinkedList();
console.log(lista.isEmpty());
lista.printAll();
lista.insertFirst("José");
lista.printAll();
lista.insertLast("Pepito"); 
lista.printAll();
lista.insertFirst("Manolo");
lista.printAll()
lista.insertLast("Barack Obama");
lista.printAll();
lista.insert("IWEJHGDWSIKJUGH", 3);
lista.printAll();
lista.removeIndex(3);
lista.printAll();
lista.insert({
    nombre: "George Bush",
    categoria: "Terrorista"
}, 2)
lista.printAll();
console.log(lista.searchIndex(2));
lista.searchValue(4);
lista.removeValue(1);
lista.printAll();