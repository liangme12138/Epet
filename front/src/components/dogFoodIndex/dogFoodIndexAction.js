
export function getTab() {
    return {
        url: 'indexTabs.php',
        params: { tabItem: 1 },
        types: ['requesting', 'tabrequested','requesterror']
    }
}

