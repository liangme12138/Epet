
export function getAtvPrd(id) {
  console.log('active',id)
  return {
    url: 'activite.php',
    method: 'post',
    params: { state: 'getAtvProduct', category: id },
    types: ['requesting', 'AtvProductrequested', 'requesterror']
  }
}