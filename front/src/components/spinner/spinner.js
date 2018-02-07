import React from 'react'
import { Toast } from 'antd-mobile'

// import './spinner.scss'
export default {
    loadSpinner: function () {
        Toast.loading('加载中...', 0, () => {
            console.log('加载完成!!!');
        1});
        },
    closeSpinner: function () {
        Toast.hide();
    }
}
