import React from 'react'
import LeftArticles from './LeftArticles'
import RightArticles from './RightArticles'
import Searchbar from './Searchbar'

class Landingpage extends React.Component {

    render() {
        return (
            <div className='landingpage'>

            <p>HELOOO</p>
                <Searchbar />
                <LeftArticles />
                <RightArticles />
            </div>
        )
    }
}

export default Landingpage