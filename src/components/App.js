import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import '../assets/scss/style.scss'

import unsplash from '../api/unsplash'

import ImageCard from './ImageCard'
import SearchBar from './SearchBar'
import Modal from './Modal'

class App extends React.Component {

    state = {searching: false, images: [], term: '', selectedImage: null, hasMoreItems: true, currentPage: 1}
    
    getPhotos = async () => {

        if(this.state.term) {

            const response = await unsplash.get('/search/photos', {
                params: {query: this.state.term, page: this.state.currentPage},
                // params: {query: this.state.term},
            })
            const data = this.state.images.concat(response.data.results)
            this.setState({searching: false, images: data, currentPage: this.state.currentPage + 1})
        } else {
            const response = await unsplash.get('/photos', {
                params: {
                    page: this.state.currentPage
                }
            })
            const data = this.state.images.concat(response.data)
            this.setState({images: data, searching: false, currentPage: this.state.currentPage + 1})
        }

        //limit the result, due to grid layout limitation
        if(this.state.currentPage === 6) {
            this.setState({hasMoreItems: false})
        }
    }

    handleModalToggleOff = (e) => {
        if(e.target.matches('.dimmer')) {
            this.setState({selectedImage: null})
        }
    }

    render() {
        const loader = <div style={{position: 'absolute', left: 0, right: 0, bottom: 10}} key={0}><div className="ui active centered inline loader"></div></div>
        const items = []

        this.state.images.map((d, index) => {
            items.push(
                <ImageCard onSelectedImage={(img) => this.setState({selectedImage: img})} key={`image-list-${index}`} image={d} />
            )

            return true
        })
        
        return (
            <>
            <div className="main-grid">
                <div className="search-wrapper">
                    <div className="ui three centered column grid container">
                        <div className="column">
                            <h1 style={{textAlign: 'center', fontSize: 42, color: '#fff', fontWeight: 500, fontFamily: "'Lobster', cursive"}}>Resplash.</h1>
                            <p style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>Find your favorite images here</p>
                            <div className="ui segment raised">
                                <SearchBar searching={this.state.searching} onSubmit={(term) => { this.setState({term: term, currentPage: 1, hasMoreItems: true, searching: true, images: []}) }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{margin: '20px 0 70px 0', position: 'relative'}} className="ui grid container container-result">
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={() => { this.getPhotos() }}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}>

                        <div className="container-grid">
                            {items}
                        </div>

                    </InfiniteScroll>

            </div>

            { this.state.selectedImage && <Modal onToggleOff={this.handleModalToggleOff} image={this.state.selectedImage} /> }
            </>
        )
    }
}

export default App