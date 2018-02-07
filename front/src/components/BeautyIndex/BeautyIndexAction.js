
export function getTab() {
  return {
    url: 'indexTabs.php',
    params: { state: 'dogFoodMenu', tabItem: 6 },
    types: ['requesting', 'tabrequested', 'requesterror']
  }
}
export function getBigImg() {
  return {
    url: 'activite.php',
    method: 'post',
    params: { state: 'getProduct', category: 5 },
    types: ['requesting', 'getPrdrequested', 'requesterror']
  }
}

export function BeautyMenu() {
  return {
    url: 'activite.php',
    method: 'post',
    params: { state: 'getDogFoodMenu', category: 11 },
    types: ['requesting', 'BeautyMenurequested', 'requesterror']
  }
}
export function getProduct(id) {
  if (id == 'all') {
    return {
      url: 'indexGetProduct.php',
      method: 'post',
      params: { state: 'getAllProduct', category: 6 },
      types: ['requesting', 'getAllProductrequested', 'requesterror']
    }
  } else {
    return {
      url: 'indexGetProduct.php',
      method: 'post',
      params: { state: 'getItemProduct', category: id },
      types: ['requesting', 'getItemProductrequested', 'requesterror']
    }
  }

}