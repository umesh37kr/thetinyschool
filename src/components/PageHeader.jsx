import React from 'react'
import '../styles/components/components.css'
const PageHeader = (props) => {
  console.log(props.name)
  return (
    <div className='page-header'>
        <img src={props.name} alt="page header" />
    </div>
  )
}

export default PageHeader