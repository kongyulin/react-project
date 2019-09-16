import React, { Component } from 'react';
import Search2 from '../component/detial/Search2'
import Newlist from '../component/detial/Newlist'

class Detial extends Component {
    render() {
        return (
            <div>
                {/* 搜索栏 */}
                <Search2 />

                {/* 列表 */}
                <Newlist />
                
            </div>
        );
    }
}

export default Detial;
