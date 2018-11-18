import React, { Component } from 'react';

import ItemsConatainer from './ItemsContainer';
import DescriptionContainer from './DescriptionContainer';
import CodeContainer from './CodeContainer';

import DataReader from '../../data/DataReader';

export default class AuraAppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = DataReader.getData();
    }

    _onSelectedItemChanged(item) {
        console.log(item);

        this.setState((state, props) => {
            return { items: state.items, selectedItem: item };
        });
    }

    render() {
        const { items, selectedItem } = this.state;

        return <div className="container-fluid row">
                    <ItemsConatainer items={items} onItemClickListener={ i => this._onSelectedItemChanged(i) } />
                    <DescriptionContainer title={selectedItem.title} description={selectedItem.description} />
                    <CodeContainer code={selectedItem.code} />
               </div>;
    }
}
