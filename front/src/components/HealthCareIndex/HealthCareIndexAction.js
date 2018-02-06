
export function getTab() {
  return {
    url: 'indexTabs.php',
    params: { state: 'dogFoodMenu', tabItem: 3 },
    types: ['requesting', 'tabrequested', 'requesterror']
  }
}
export function getBigImg() {
  return {
    url: 'activite.php',
    method: 'post',
    params: { state: 'getProduct', category: 3 },
    types: ['requesting', 'getPrdrequested', 'requesterror']
  }
}
export function HealthCareMenu() {
  return {
    url: 'activite.php',
    method: 'post',
    params: { state: 'getDogFoodMenu', category: 8 },
    types: ['requesting', 'HealthCareMenurequested', 'requesterror']
  }
}