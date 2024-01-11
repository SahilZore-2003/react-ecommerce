import React from 'react'
import "./DescriptionBox.scss"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="navigator">
        <div className="navbox">Description</div>
        <div className="navbox fade">Reviews (322)</div>
      </div>
      <div className="description">
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus atque odio laboriosam, doloremque reprehenderit consectetur voluptas ratione quaerat eligendi quas consequuntur fugiat tempora sed blanditiis corrupti ipsa tenetur vel modi reiciendis commodi, animi voluptate, ab id saepe. Illo earum recusandae eaque. Dicta minus reiciendis, quibusdam cum asperiores dolorem laborum dolore!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos corrupti aperiam vero ea delectus. Modi autem doloremque aliquam non!</p>
      </div>
    </div>
  )
}

export default DescriptionBox
