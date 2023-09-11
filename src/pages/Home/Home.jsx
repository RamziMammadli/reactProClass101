import React, { useContext } from 'react'
import Top from '../../components/Top/Top'
import Search from '../../components/Search/Search'
import Main from './components/Main'
import { MainContext } from '../../api/context/contextApi'

const Home = () => {


  return (
    <div>
        <Top/>
        <Search/>
        <Main/>
    </div>
  )
}

export default Home