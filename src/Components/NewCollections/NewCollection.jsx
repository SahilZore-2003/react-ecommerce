import React from 'react'
import "./NewCollection.scss"
import new_collections from "../assets/new_collections";
import Items from '../Items/Items';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1 className='center'>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {
            new_collections.map((item,i) => <Items id={item.id} key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
        }
      </div>

    </div>
  )
}

export default NewCollection
