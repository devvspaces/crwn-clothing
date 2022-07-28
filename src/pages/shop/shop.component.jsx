import React from "react";
import CollectionPreview from "../../components/preview/component";
import SHOP_DATA from "./collections"; 


export default class ShopPage extends React.Component {
    constructor(){
        super()

        this.state = {
            'collections': SHOP_DATA
        }
        
    }

    render(){
        let {collections} = this.state
        return (
            <div>
                <h1>Shop page</h1>
                {
                    collections.map(({id, title, ...others})=>(
                        <CollectionPreview key={id} title={title} {...others} />
                    ))
                }
            </div>
        )
    }
}