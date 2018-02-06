import React from 'react';
import { connect } from 'react-redux';
import * as categoryActions from '../category/categoryAction'
import spinner from '../spinner/spinner'

import './category.scss'

class CategoryComponent extends React.Component{
    state = {
        dataPro: [],
        dataBrand:[],
        category: [],
        hot:[],
        brand:[],
        type:''
    }
    
    componentWillMount() {
        spinner.loadSpinner();
        if (this.props.ajaxResult1.length <= 0){
            //显示loading
            this.props.getCategory().then(res => {
                this.setState({ hot: this.props.ajaxResult2 });
                this.setState({ category: this.props.ajaxResult3 });
                this.setState({ brand: this.props.ajaxResult4 });
                this.setState({ dataPro: this.props.ajaxResult2 });
                this.setState({ type: "为您推荐" });
                spinner.closeSpinner();
            }).catch(error=>{
                spinner.closeSpinner();
            });
        }else{
            this.setState({ hot: this.props.ajaxResult2 });
            this.setState({ category: this.props.ajaxResult3 });
            this.setState({ brand: this.props.ajaxResult4 });
            this.setState({ dataPro: this.props.ajaxResult2 });
            this.setState({ type: "为您推荐" });
            spinner.closeSpinner();
        }
    }
    checked(event){
        // 初始化滚动条位置
        $(".categoryRight")[0].scrollTo(0, 0);
        this.setState({ dataPro: [] });
        this.setState({ dataBrand: [] });
        this.setState({ type: event.target.innerHTML });
        $('li').removeClass('active');
        var id = event.target.id;
        event.target.classList.toggle('active');
        if(id == 1){
            this.setState({ dataPro: this.state.hot });
        }else{
            var arr = [];
            for(var i=0;i<this.state.category.length;i++){
                if (this.state.category[i].category1Id == id){
                    arr.push(this.state.category[i]);
                }
            }
            this.setState({ dataPro: arr });
            var arrB = [];
            for (var i = 0; i < this.state.brand.length; i++) {
                if (this.state.brand[i].category1Id == id) {
                    arrB.push(this.state.brand[i]);
                }
            }
            this.setState({ dataBrand: arrB });
        }
    }
    product(val){
        this.props.router.push('/product/' + val);
    }
    render(){
        return (
            <div id="category">
                <div className="categoryLeft" >
                    <ul onClick={this.checked.bind(this)}>
                        {
                        this.props.ajaxResult1.map(function(item,idx){
                                return (
                                    <li id={item.category1Id} key={idx} className={item.categoryName == "为您推荐" ? 'active':''}>{item.categoryName}</li>
                                )
                            })
                        }
                    </ul>    
                </div>
                <div className="categoryRight">
                    <div className="categoryRightT">
                        <h3>{this.state.type}</h3>
                        <div>
                            <ul>
                                {
                                    this.state.dataPro.map((item, idx) => {
                                        return (
                                            <li key={idx} onClick={this.product.bind(this, item.classify2Id)}>
                                                <img src={item.classifyImg} alt=""/>
                                                <p>{item.classifyName}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="categoryRightF" style={this.state.dataBrand.length > 0 ? { display:'block'} : {display:'none'}}>
                        <h3>热门品牌</h3>
                        <div>
                            <ul>
                                {
                                    this.state.dataBrand.map((item, idx) => {
                                        return (
                                            <li key={idx}>
                                                <img src={item.brandImg} alt="" />
                                                <p>{item.brandName}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let mapToState = function(state){
    return {
        ajaxStatus: state.category.status,
        ajaxResult1: state.category.result1 || [],
        ajaxResult2: state.category.result2 || [],
        ajaxResult3: state.category.result3 || [],
        ajaxResult4: state.category.result4 || []
    }
}

export default connect(mapToState, categoryActions)(CategoryComponent)