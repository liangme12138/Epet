export default {
    TabItem: (id, tabItems, TabDate)=>{
        tabItems = [];
        if (TabDate) {
            TabDate.forEach(item => {
                if (item.tabId == id) {
                    // console.log(item.tabId)
                    tabItems.push(item.classifyImg)
                }
            })
            return tabItems;
            // this.setState({ tabItems: tabItems })
        }
    }
}