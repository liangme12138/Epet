import React from 'React';
import { connect } from 'react-redux';
import { Spin, Modal, message, notification ,Alert,Button} from 'antd';

import * as datagridAction from '../../actions/datagridAction';
import '../../sass/datagrid.scss';
class Datagrid extends React.Component {
    componentWillMount(){
        this.setState({
            newList:{},
            visible:false,
            status:'1',
            page:1,
            err:1,
            url: this.props.url,
            iCurShow: this.props.iCurShow
        })
    }
    componentDidMount(){
        this.props.getData({ status: 'page', page: 1, url: this.state.url, warning: this.props.warning});
    }
    getKeys(data){
        var newObj = (data ? Object.keys(data) : []);
        let has = newObj.indexOf("id");
        if (has > 0){
            newObj.splice(has,1);
        }
        return newObj;
    }
    changePage(event){
        let params;
        if (event.target.innerHTML == this.state.page){
            return;
        }
        if(this.props.keyWord){
            params = {
                status: 'page',
                page: event.target.innerHTML,
                url: this.props.iCurUrl,
                keyWord: this.props.keyWord
            }
            this.props.getData(params);
        } else {
            params = {
                status: 'page',
                page: event.target.innerHTML,
                url: this.state.url
            };
            this.props.getData(params);
        }
        this.setState({ iCur: event.target.innerHTML, page: event.target.innerHTML });
    }
    createPage(){
        if(!this.props.total){
            return;
        }
        let page = [];
        for (let i = 1; i < Math.ceil(Number(this.props.total)/8)+1; i++) {
            page.push(<li key={i} className={i == this.state.page ? 'active' : ""} onClick={this.changePage.bind(this)}>{i}</li>);
        }
        return page;
    }
    moreCont(event){
        let iCuId = event.target.id;
        this.setState({ id: iCuId,err:1 });
        this.props.getData({
            status:'get',
            id:iCuId,
            url: this.state.url 
        })
        this.showModal();
    }
    showModal(){
        this.setState({
            visible: true,
            status: '1'
        });
    }
    handleOk(){
        this.setState({
            visible: false,
            status: '1'
        });
    }
    handleCancel(){
        this.setState({
            visible: false,
            status:'1'
        });
    }
    replaceKey(iCur,key){
        let obj = {
            'proprietary':{
                'goodsId':'商品编号',
                'name':'商品名称',
                'type':'类型',
                'price':'价格',
                'saleQty':'数量',
                'goodsImg':'商品图片',
                'keepNum':'库存',
                'birth':'生产日期',
                'keepDate':'有效期',
                'addTime':'上架时间'
            },
            'pet': {
                'goodsId': '商品编号',
                'name': '名字',
                'phoneNum': '用户手机',
                'breed': '品种',
                'price': '价格',
                'goodsImg': '商品图片',
                'gender': '性别',
                'color': '颜色',
                'age': '年龄',
                'classify': '分类',
                'hot': '热度',
                'vaccine': '打疫苗次数',
                'addTime': '上架时间'
            },
            'viewOrder':{
                'phoneNumId':'用户手机',
                'orderId':'订单号码',
                'status':'订单状态',
                'qty':'购买数量',
                'price':'订单总金额',
                'postage':'订单邮费',
                'address':'客户地址',
                'addTime':'订单时间'
            },
            'viewUser': {
                'username': '姓名',
                'phoneNum': '手机',
                'iden': '身份证号',
                'email': '邮箱',
                'address': '通讯地址',
                'nickname': '昵称',
                'addTime': '注册时间'
            },
            'staff':{
                'username': '姓名',
                'password': '密码',
                'position': '职位',
                'addTime': '注册时间'
            }

        }
        if(iCur && key){    
            return obj[iCur][key];
        }else{
            return obj[iCur];
        }
    }
    render(){
        return (
            <div className="datagrid">
                <div style={{ width: '100%', height:'500px','position':'absolute',left:'240px',top:'100px'}} className={this.props.shade}></div>
                <Spin className={this.props.loading} />

                <table>
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.props.dataList[0]).map((key,index)=>{
                                    if (this.replaceKey(this.state.iCurShow, key)){
                                        return <th key={'tips' + index}>{this.replaceKey(this.state.iCurShow,key)}</th>
                                    }
                                })
                            }
                            <th><Button type="danger" className={this.state.iCurShow == "viewUser" || this.state.iCurShow == "viewOrder" || this.props.iCurShow == "pet" || this.props.warning ? 'hide' : ""} onClick={this.addData.bind(this)}>添加</Button><span className={this.state.iCurShow == "viewUser" || this.state.iCurShow == "viewOrder" || this.props.iCurShow == "pet" || this.props.warning ? '' : "hide"}>操作</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataList.map((item,index)=>{
                                return (
                                    <tr key={'tbody' + index}>
                                        {
                                            this.getKeys(item).map((goods,idx)=>{
                                                if (this.replaceKey(this.state.iCurShow, goods)){
                                                    return <td key={'td' + idx}>
                                                        {item[goods]}
                                                    </td>
                                                }
                                            })
                                        }
                                        <td>
                                            <Button type="primary" id={item.orderId ? item.orderId : item.id} onClick={this.moreCont.bind(this)}>查看</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <ul>
                    {this.createPage()}
                </ul>

                <Modal
                    title="更多详情"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}
                    okText="确认"
                    cancelText="取消"
                >
                <Alert message={this.state.alert} className={this.state.err == 1 ? 'hide' : ""} type="error" />
                {
                    this.getKeys(this.props.moreData[0]).map((goods, idx) => {
                        if (this.replaceKey(this.state.iCurShow, goods)) {
                            if (this.state.status == "1" && goods != "goodsImg"  && goods != "status"){
                                return <p key={"p" + idx}><label key={"label" + idx}>{this.replaceKey(this.state.iCurShow, goods)}</label><span>{this.props.moreData[0][goods]}</span></p>;
                            } else if (this.state.status == "2" && goods != "goodsImg" && goods != "status"){
                                return <p key={"p" + idx}><label key={"label" + idx}>{this.replaceKey(this.state.iCurShow, goods)}</label><input type="text" id={goods} key={"text"+idx} disabled={goods == "goodsId" || goods == "addTime" || goods == "orderId" || goods == "price" ||this.state.iCurShow == "userManage"  ? 'true' : ""} value={this.state.moreList[0][goods]} onChange={this.changeVal.bind(this)} /></p>;
                            }
                        }
                        if (goods == "goodsImg" && this.state.status == "1" && this.state.iCurShow !== "viewOrder") {
                            let arr = this.props.moreData[0][goods].split(",");
                            return <div className="imgBox" key={"p" + idx}><label key={"label" + idx}>{this.replaceKey(this.state.iCurShow, goods)}</label><img src={arr[0]} /></div>;
                        }
                    })
                } 
                {
                    this.getKeys(this.state.moreData).map((goods, idx) => {
                        if(this.state.status != "3"){
                            return;
                        }else{
                            if (this.replaceKey(this.state.iCurShow, goods) && goods !== "goodsImg") {
                                return <p key={"p" + idx}><label key={"label" + idx}>{this.replaceKey(this.state.iCurShow, goods)}</label><input type="text" id={goods} key={"text" + idx} onBlur={this.loseFocus.bind(this)} placeholder={this.replaceKey(this.state.iCurShow, goods)} /></p>;
                            } else if (this.replaceKey(this.state.iCurShow, goods) && goods == "goodsImg") {
                                return <form name="form1" id="form1" key="form1"><label> {this.replaceKey(this.state.iCurShow, goods)}</label><input id="file" type="file" name="pic" /></form>
                            }
                        }
                    })
                }
                                                                                            
                    <div className="otherAction" style={{ 'marginTop': '10px' }} className={this.state.iCurShow == "viewUser" || this.state.iCurShow == "pet" || this.props.warning || this.state.url == "sellerOrder.php" ? 'hide' : ""}>
                        <Button type="primary"  style={{'marginRight':'10px'}} className={this.state.status=="3" ? 'hide' : ""} onClick={this.changeCont.bind(this)}>编辑</Button>
                        <Button type="primary" onClick={this.saveDel.bind(this)}>{this.state.status == "2" || this.state.status == "3" ? "保存" : "删除"}</Button>
                    </div>
                </Modal>
            </div>
        )
    }
    addData(){
        let newData = JSON.parse(JSON.stringify(this.props.dataList[0]));
        newData.goodsImg = "";
        this.setState({
            visible: true,
            status: '3',
            err:1,
            moreData: newData
        })
      
    }
    loseFocus(event){                   
        let newData = JSON.parse(JSON.stringify(this.state.newList));
        if (event.target.id !== "keepDate" && event.target.id !== "addTime" && event.target.value == ""){
           this.setState({
               alert:"输入不可为空!",
               err:2
           })
           event.target.focus();
        }else{
           this.setState({
               err:1
           }) 
            newData[event.target.id] = event.target.value;
            this.setState({
                newList: newData
            })
        }
    }
    changeCont(){
        this.setState({
            'status':'2',
            moreList: this.props.moreData
        })
    }
    changeVal(event){
        let newArr = JSON.parse(JSON.stringify(this.state.moreList));
        newArr[0][event.target.id] = event.target.value;
        for (var attr in newArr[0]) {
            if (newArr[0][attr] == this.props.moreData[0][attr]) {
                delete newArr[0][attr];
            }
        }
        newArr[0].id = this.state.id;
        newArr[0].update = "true";
        this.setState({
            moreList:newArr
        })
    }
    saveDel(event){
        if (this.state.status == "2"){
            this.state.moreList[0].status = 'upd';
            this.state.moreList[0].addTime = this.props.moreData[0].addTime;
            this.state.moreList[0].url = this.state.url;
            if (!this.state.moreList[0].update){
                this.handleCancel();
                return;
            }
            this.props.getData(this.state.moreList[0]);
        } else if (this.state.status == "1"){
            if (window.sessionStorage.getItem('position') == "员工"){
                message.warning('很抱歉,您没有删除权限,请联系管理员!');
                return;
            }
            this.props.getData({
                status:'del',
                id: this.state.id,
                url: this.state.url 
            });
        }else if(this.state.status == "3"){
            let addData = JSON.parse(JSON.stringify(this.state.newList));
            let iCurObj = this.replaceKey(this.state.iCurShow);
            for (var attr in iCurObj){
                if (!addData[attr] && attr != "goodsImg" && attr != "keepDate" && attr != "addTime"){
                    this.setState({
                        alert: iCurObj[attr]+"输入不可为空!",
                       err:2
                    })
                    return;
                }
            }
            addData.status = "add";
            addData.url = this.state.url; 
            this.props.getData(addData);   
        }
        this.handleCancel();
    }
    componentDidUpdate(){
        if(this.props.moreData == "ok"){
            let params = {
               status: 'page',
               page: this.state.page,
               url: this.state.url 
            };
            notification['success']({
                message: '操作成功',
                description: '数据操作成功!',
                duration: 1
            });
            this.props.getData(params);
        } else if (this.props.err) {
            message.error('很抱歉,没有找到相关的内容!', 1);
        }
    }
}
const mapToState = function(state){
    return {
        shade: state.Datagrid.shade ? state.Datagrid.shade : 'shade hide',
        loading: state.Datagrid.loading ? state.Datagrid.loading : 'loading hide',
        dataList: state.Datagrid.dataList ? state.Datagrid.dataList : [],
        total: state.Datagrid.total,
        iCur: state.Datagrid.iCurPage,
        keyWord: state.Datagrid.keyWord ? state.Datagrid.keyWord : "",
        moreData: state.Datagrid.moreData ? state.Datagrid.moreData : "",
        iCurUrl: state.Datagrid.iCurUrl ? state.Datagrid.iCurUrl : "",
        err: state.Datagrid.err ? state.Datagrid.err : ""
    }
}
export default connect(mapToState, datagridAction)(Datagrid);