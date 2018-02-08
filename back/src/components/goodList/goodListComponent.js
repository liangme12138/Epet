import React from 'react';
import { connect } from 'react-redux';
import * as goodListAction from './goodListAction';
import './goodList.scss';
import { Table, Button, Input, Popconfirm, Icon, Pagination, Modal } from 'antd';

const confirm = Modal.confirm;


class GoodListComponent extends React.Component {
    state = {
        currentPage:1,
        loading: false,
        visible: false,
        goodId:'',
        goodName:'',
        brand:'',
        Price:'',
        originPrice:'',
        size:'',
        describe:'',
        categoryName:'',
        classifyName:'',
        sale:'',
    };
    componentWillMount() {
        this.props.getProducts(1).then(()=>{
           
        })
    }
    getKeys(item) {
        var newObj = item ? Object.keys(item) : []
        return newObj
    }
    Menus(obj,key){
        // console.log('obj', key)
        if (key == 'Imgage') {
            return (<img src={obj}/>)
        } else {
            return (obj)
        }
    }
    
    delete (e){
        var THIS = this;
        var id = e.target.parentNode.parentNode.id;
        console.log('del',e.target.parentNode.parentNode.id);
        confirm({
            title: '提示',
            content: '确定要删除该商品吗？',
            onOk() {
                console.log('OK');
                THIS.props.deleteProductItem(id);
                THIS.props.getProducts(THIS.state.currentPage);
            },
            onCancel() {
                // console.log('Cancel');
            },
        });
    }

    edit = (eve) => {
       
       
        this.props.getProductItem(eve.target.parentNode.parentNode.id).then(()=>{
            this.setState({
                visible: true,
            });

            this.setState({ goooId: this.props.prdItem[0].ID })
            this.setState({goooName: this.props.prdItem[0]['商品名称'] })
            this.setState({ brand: this.props.prdItem[0]['品牌'] });
            this.setState({ Price: this.props.prdItem[0]['价格(元)'] });
            this.setState({ originPrice: this.props.prdItem[0]['原价(元)'] });
            this.setState({ size: this.props.prdItem[0]['商品规格'] });
            this.setState({ describe: this.props.prdItem[0]['商品详情'] });
            this.setState({ categoryName: this.props.prdItem[0]['商品分类(1)'] });
            this.setState({ classifyName: this.props.prdItem[0]['商品分类(2)'] });
            this.setState({ sale: this.props.prdItem[0]['销售量(件)'] });
             // console.log('goooName', this.state.goooName)
            $('.inputItem').find('input').eq(0).attr("disabled", "disabled");
            $('.inputItem').find('input').eq(-1).attr("disabled", "disabled");
            $('.inputItem').find('input').eq(-2).attr("disabled", "disabled");
        })
    }
    handleOk = () => {
        const obj = { goooId: this.state.goooId, goooName: this.state.goooName, brand: this.state.brand, Price: this.state.Price, originPrice: this.state.originPrice, size: this.state.size, describe: this.state.describe, categoryName: this.state.categoryName, classifyName: this.state.classifyName, sale: this.state.sale }
        this.props.editProductItem(obj).then(()=>{
            this.props.getProducts(this.state.currentPage);
        });
       
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);  
         
    }
    Change(id,e){
        // console.log(e.target.value)
        // console.log('id', id)
        if(id == 1){
            this.setState({ goooName: e.target.value })
        } else if (id == 3){
            this.setState({ brand: e.target.value })
        } else if(id == 4){
            this.setState({ Price: e.target.value })
        } else if (id == 5) {
            this.setState({ originPrice: e.target.value })
        }   else if (id == 6) {
            this.setState({ sale: e.target.value })
        } else if (id == 7) {
            this.setState({ size: e.target.value })
        } else if (id == 8) {
            this.setState({ describe: e.target.value })
        }
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    onpageChange = (page) => {
        this.setState({
            currentPage: page,
        });
        this.props.getProducts(page);
       
    }
    showPrd =(obj)=>{
        return this.getKeys(obj).map((key, index) => {
            // console.log(key)
            if (key == 'Imgage'){
                return (<div style={{ margin: '24px 0'}} key={index}>{key}<img className="IMG" src={obj[key]} /></div>)
            } else {
                return <div className="inputItem" style={{ margin: '24px 0' }} key={index}>{key}
                    <Input defaultValue={obj[key]} id={index} onChange={this.Change.bind(this, index)}/>
                </div>
            }
           
        })
       
    }
    render(){
        return (
            <div>
                <table className="goodslist">
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.props.prdDateList[0]).map( function (key, index) {
                                    return <th key={index}>{key}</th>
                                })
                            }
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.prdDateList.map( (obj, index)=> {
                                return (
                                    <tr key={'tr' + index} id={obj.ID}>
                                        {
                                            this.getKeys(obj).map( (key, idx)=> {
                                                if (typeof obj[key] != 'object') {
                                                    return <td key={'b' + idx}>
                                                        {
                                                            this.Menus(obj[key],key)
                                                        }
                                                    </td>
                                                }
                                                return <td key={'a' + idx}>object</td>

                                            })

                                        }
                                       <td className="operation"><Icon type="edit" className="edit"  onClick={this.edit.bind(this)}/>
                                            <Icon type="delete" className="del" onClick={this.delete.bind(this)}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                    </tfoot>
                  
                </table>
                <Pagination current={this.state.currentPage} onChange={this.onpageChange} total={ this.props.prdPage == '' ? 1 : Number(this.props.prdPage[0]['rowsCount'])} style={{ float: "right" }} defaultPageSize={6} />
                <Modal id="aa" key={this.state.visible}
                    visible={this.state.visible}
                    title="商品修改"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
                        确认修改
                        </Button>,
                    ]}
                    >
                    {
                        this.showPrd(this.props.prdItem[0])
                    }
                </Modal>
            </div>
        );
    }
}

const mapToState = function (state) {
    console.log('state', state.goodListReducer)
    return {
        prdDateList: state.goodListReducer.result1 || [],
        prdPage: state.goodListReducer.result2 || [],
        prdItem: state.goodListReducer.result3 || [],
    }
}

export default connect(mapToState, goodListAction)(GoodListComponent);