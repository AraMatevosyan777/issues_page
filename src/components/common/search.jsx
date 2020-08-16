import React from 'react'
import { Input } from 'antd'

const Search = ({searchValue, setSearchValue, placeholder}) => {
    return(
        <Input
      placeholder={placeholder}
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      style={{ width: 200, marginRight: '10px' }}
    />
    )
}

export default Search