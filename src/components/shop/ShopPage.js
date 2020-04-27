import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../preview-collection/CollectionPreview'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections}= this.state
        return(
            <div>
                {
                    collections.map(({...rest}, index)=>{
                        return(<CollectionPreview key={index} {...rest}/>)
                    })
                }
            </div>
        )
    }
}
export default ShopPage