import React from 'react'

function Search({search,setSearch,handleSearch}) {
  return (
    <div className='search-engine'>
    <input type="text" className='city-search' placeholder='Enter City Name' name='search' value={search} onChange={(event)=>setSearch(event.target.value)}/>
    <button className='seacrh-button' onClick={handleSearch}>Search</button>
      Search
    </div>
  )
}

export default Search
