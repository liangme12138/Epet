export function getProducts(page) {
    console.log('action',page)
    return {
        url: 'products.php',
        method: 'post',
        params: { state: 'getProducts', page: page, limit:6},
        types: ['requesting', 'productrequested', 'requesterror']
    }
}
export function getProductItem(id) {
    console.log('id',id)
    return {
        url: 'products.php',
        method: 'post',
        params: { state: 'getProductItem', id: id},
        types: ['requesting', 'productItemrequested', 'requesterror']
    }
}
export function editProductItem(obj) {
    console.log('id', obj)
    return {
        url: 'products.php',
        method: 'post',
        params: { state: 'UpdateProductItem', goooId: obj.goooId, goooName: obj.goooName, brand: obj.brand, Price: obj.Price, originPrice: obj.originPrice, size: obj.size, describe: obj.describe, categoryName: obj.categoryName, classifyName: obj.classifyName, sale: obj.sale },
        types: ['requesting', 'editProductItemrequested', 'requesterror']
    }
}
export function deleteProductItem(id) {
    console.log('id', id)
    return {
        url: 'products.php',
        method: 'post',
        params: { state: 'DeleteProductItem', goooId: id},
        types: ['requesting', 'deleteProductItemrequested', 'requesterror']
    }
}