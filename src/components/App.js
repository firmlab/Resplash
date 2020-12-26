import React from 'react'

import '../assets/scss/style.scss'

import unsplash from '../api/unsplash'

import SearchResult from './SearchResult'
import SearchBar from './SearchBar'
import Modal from './Modal'

class App extends React.Component {

    state = {searching: false, images: [], selectedImage: null}
    
     onSearchSubmit = async (term) => {
        // console.log(term)
        this.setState({searching: true})
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        })

        this.setState({images: response.data.results})
        this.setState({searching: false})
    }

    componentDidMount = () => {
        const getPhotos = async () => {
            const response = await unsplash.get('/photos')
            this.setState({images: response.data})
        }

        getPhotos()
    }

    handleModalToggleOff = (e) => {
        if(e.target.matches('.dimmer')) {
            this.setState({selectedImage: null})
        }
    }

    render() {
        return (
            <>
            <div className="main-grid">
                <div className="search-wrapper">
                    <div className="ui three centered column grid container">
                        <div className="column">
                            <h1 style={{textAlign: 'center', fontSize: 42, color: '#fff', fontWeight: 500, fontFamily: "'Lobster', cursive"}}>Resplash.</h1>
                            <p style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>Find your favorite images here</p>
                            <div className="ui segment raised">
                                <SearchBar searching={this.state.searching} onSubmit={this.onSearchSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: 20}} className="ui grid container container-result">
                <div className="container-grid">
                    <SearchResult onSelectedImage={(img) => this.setState({selectedImage: img})} data={this.state.images} />
                </div>
            </div>

            { this.state.selectedImage && <Modal onToggleOff={this.handleModalToggleOff} image={this.state.selectedImage} /> }
            </>
        )
    }
}

export default App