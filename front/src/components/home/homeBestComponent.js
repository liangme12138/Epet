import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import '../../components/home/home.scss';

export default class HomeBastComponent extends React.Component{
    componentWillMount() {
        // console.log(this.props.Img[0])
    }
    toActive(atv){
        if (atv == 'HighQuality'){
            // console.log(atv)
            hashHistory.push('highquality')
        } else if (atv == 'fake'){
            // console.log(atv);
            hashHistory.push('fake')
            // this.$router.push('fake')
        } else if (atv == 'feed'){
            // console.log(atv)
            hashHistory.push('feed')
        } else if (atv == 'guide'){
            hashHistory.push('guide')
        } else if (atv == 'toys'){
            hashHistory.push('toys')
        } else if (atv == 'drive'){
            hashHistory.push('drive')
        } else if (atv == 'watch'){
            hashHistory.push('watch')
            
        } else if (atv == 'scarce') {
            hashHistory.push('scarce')

        }
    }
    render(){
        return(
            <div className="currency_ad">
                <div className="currency-box">
                    <div className="currency-box-left">
                        <i onClick={this.toActive.bind(this, this.props.active[0])}>
                            <img src={this.props.Img[0]} />
                        </i>
                    </div>
                    <div className="currency-box-right">
                        <i onClick={this.toActive.bind(this, this.props.active[1])}>
                            <img src={this.props.Img[1]} />
                        </i>
                        <i onClick={this.toActive.bind(this, this.props.active[2])}>
                            <img src={this.props.Img[2]} />
                        </i>
                    </div>
                </div>
            </div>
        )
    }
}