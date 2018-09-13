import React from 'react'
import LeftArticles from './LeftArticles'
import RightArticles from './RightArticles'
import Searchbar from './Searchbar'

class App extends React.Component {

    render() {
        return (
            <div classname='landingpage'>
                <Searchbar />
                <LeftArticles />
                <RightArticles />
            </div>
        )
    }
}