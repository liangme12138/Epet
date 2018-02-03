export function getTab() {
    return {
        url: 'indexTabs.php',
        params: { tabItem: 2 },
        types: ['requesting', 'costumetabrequested', 'requesterror']
    }
}

