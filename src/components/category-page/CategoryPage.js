import React from 'react'
import {connect} from 'react-redux'
import {selectCategory} from '../../redux/shop/shop.selector'


import CollectionItem from '../collection-item/CollectionItem'

import './CategoryPage.scss'

function CategoryPage({category}) {
    console.log(category)
    const {title, items} = category
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}
            </h2>
            <div className='items'>
                {
                    items.map((item, index)=>{
                        return (<CollectionItem key={index} item={item}/>)
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>({// the second parameter gives to access to the props passed in this particular component. 
    category:selectCategory(ownProps.match.params.categoryId)(state)// not sure why this extra (state) is needed but it is needed in this case. this is because you only need part of the state and this selectCategory returns another function taking in the parameter unlike other selector which only returns a value.  
})

export default connect(mapStateToProps)(CategoryPage)