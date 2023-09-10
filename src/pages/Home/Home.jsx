import React, { useContext } from 'react'
import Top from '../../components/Top/Top'
import Search from '../../components/Search/Search'
import Main from './components/Main'
import { MainContext } from '../../api/context/contextApi'

const Home = () => {

  const {name,surname} = useContext(MainContext)

  return (
    <div>
        <Top/>
        <Search/>
        <Main/>
        <h1>{name}</h1>
        <h1>{surname}</h1>
    </div>
  )
}

export default Home