import React from 'react'
import LeftArticles from './LeftArticles'
import RightArticles from './RightArticles'
import Searchbar from './Searchbar'

class Landingpage extends React.Component {

    render() {
        return (
            <div className='landingpage'>

            <div class="container">
            
  <Searchbar />
  
</div>
                

                <div class="columns">
  <div id="left" class="column">
  <LeftArticles />
  </div>
  <div id="centre" class="column">
  </div>
  <div id="right" class="column">
  <RightArticles />
  </div>
  </div>
                
                
            </div>
        )
    }
}

export default Landingpage