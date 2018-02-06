import React from 'react';
import { connect } from 'react-redux'
import './brand.scss'

class BrandComponent extends React.Component{
    state = {
        data: ['狗狗主食', '狗狗零食', '狗狗服饰', '狗狗玩具', '狗狗保健', '狗狗医疗', '狗狗牵引', '狗狗美容']
    }
    render(){
        return(
            <div id="brand" style={this.props.resultBrand.length ? { display:'block'} : {display:'none'}}>
                {
                    this.state.data.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <h3>---{item}---</h3>
                                <ul>
                                    {
                                        this.props.resultBrand.map((items, idxs) => {
                                            var id = '';
                                            if (item == "狗狗主食"){
                                                id = 2;
                                            } else if (item == "狗狗零食"){
                                                id = 3;
                                            } else if (item == "狗狗服饰") {
                                                id = 4;
                                            } else if (item == "狗狗玩具") {
                                                id = 7;
                                            } else if (item == "狗狗保健") {
                                                id = 8;
                                            } else if (item == "狗狗医疗") {
                                                id = 9;
                                            } else if (item == "狗狗牵引") {
                                                id = 10;
                                            } else if (item == "狗狗美容") {
                                                id = 11;
                                            }
                                            if (items.category1Id == id) {
                                                return (
                                                    <li key={'snacks' + idxs}>
                                                        <img src={items.brandImg} alt="" />
                                                        <p>{items.brandName}</p>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


let mapToState = function (state) {
    return {
        ajaxStatus: state.category.status,
        resultBrand: state.category.result4 || [],
    }
}

export default connect(mapToState)(BrandComponent)

