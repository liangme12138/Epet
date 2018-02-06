export function getCategory(){
    return {
        types: ['requestingCate', 'requestedCate', 'requesterrorCate'],
        url:'category.php',
        method:'post',
        params: { recommend:1}
    }
}

