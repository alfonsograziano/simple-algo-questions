class ListNode{
    constructor(value, next){
        this.value = value
        this.next = next
    }

    setNext(next){
        this.next = next
    }

    getNext(){
        return this.next
    }

    setValue(value){
        this.value = value
    }

    getValue(){
        return this.value
    }
    
    // This method is useful in order to setup a list :) 
    // E.g. => firstNode.addNext(2).addNext(3).addNext(4).addNext(5)
    addNext(value){
        this.next = new ListNode(value)
        return this.next
    }
}

module.exports =  ListNode

