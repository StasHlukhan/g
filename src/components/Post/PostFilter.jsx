import React from 'react'
import MyInput from '../UI/Input/MyInput'
import MySelect from '../UI/select/MySelect'

const PostFilter=({filter,setFilter})=> {
  return (
    <div>
        <MyInput
        value={filter.query}
        onChange={ e => setFilter({...filter, query: e.target.value})}
        placeholder="Search"
        />
        <MySelect 
        value={filter.sort}
        onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
        defaultValue="Filter"
        options={[
          {value:'title',name:'Name'},
          {value:'body',name:'Decription'}
        ]}
        />
      </div>
  )
}

export default PostFilter