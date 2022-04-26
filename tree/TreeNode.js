class TreeNode{
    constructor(value, left, right){
        this.value = value
        this.left = left
        this.right = right
    }

    setLeft(left){
        this.left = left
    }
    setRight(right){
        this.right = right
    }

    getLeft(left){
        return this.left
    }
    getRight(right){
        return this.right
    }

    setValue(value){
        this.value = value
    }

    getValue(){
        return this.value
    }
    
   
    addLeft(value){
        this.left = new TreeNode(value)
        return this.left
    }

    addRight(value){
        this.right = new TreeNode(value)
        return this.right
    }

    isLeaf(){
        return typeof this.left === "undefined" && typeof this.right === "undefined"
    }

}

module.exports =  TreeNode
