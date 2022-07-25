import React from 'react'

const PageHeader = (props) => {
  console.log(props.name)
  return (
    <div className='page-header'>
        <img src={props.name} alt="page header" />
    </div>
  )
}

export default PageHeader