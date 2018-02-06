export default {
    TabItem: (id, tabItems, TabDate)=>{
        tabItems = [];
        if (TabDate) {
            TabDate.forEach(item => {
                if (item.tabId == id) {
                    // console.log(item.tabId)
                    
                    tabItems.push(item.classifyImg);
                   
                }
            }) 
            if (tabItems.length < 6){
                tabItems.push("../src/assets/img/food/5ed19b8980ba1b781d2ceabbcbf9b943.jpg")
            }
            return tabItems;
            // this.setState({ tabItems: tabItems })
        }
    }
}