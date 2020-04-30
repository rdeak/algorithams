class LinkedList {
    constructor(public data: number, public next: LinkedList | null = null) {}
}

function add(
    list1: LinkedList | null,
    list2: LinkedList | null,
    prevCarry: number = 0
): LinkedList | null {
    if (!list1 && !list2) {
        return prevCarry ? new LinkedList(prevCarry) : null;
    }

    const notNullList1 = list1 ?? new LinkedList(0);
    const notNullList2 = list2 ?? new LinkedList(0);

    const sum = notNullList1.data + notNullList2.data + prevCarry;
    const value = sum % 10;
    // TODO find more convenient way for finding carry of sum
    const carry = parseInt('' + sum / 10);

    return new LinkedList(value, add(notNullList1.next, notNullList2.next, carry));
}

function printList(list: LinkedList | null):void {
    let temp = list;
    while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

const list1 = new LinkedList(2, new LinkedList(4, new LinkedList(3)));
const list2 = new LinkedList(5, new LinkedList(6, new LinkedList(4)));
printList(add(list1, list2));

