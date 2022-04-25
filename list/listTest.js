const ListNode = require("./ListNode")

const firstNode = new ListNode(1)
firstNode.addNext(2).addNext(3).addNext(4).addNext(5)


console.log(JSON.stringify(firstNode, undefined, 4))

