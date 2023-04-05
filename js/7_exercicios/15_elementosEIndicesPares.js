function verificaElementoEIndicePar(array) {
    return array.filter((element, i) => element % 2 == 0 && i % 2 == 0)
}

const nums1 = [1, 2, 3, 4, 5, 6]
const nums2 = [10, 2, 22, 4, 5, 6]
console.log(verificaElementoEIndicePar(nums1))
console.log(verificaElementoEIndicePar(nums2))