import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    onChange = (event) => {
        this.setState({ items: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`https://xkcd.now.sh/?comic=${this.state.items}`)
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    } 

    render(){
        let {items} = this.state;
            return(
                <div className="page">
                    <div className="navbar">
                        <Link className="latest" to="/">Latest</Link>
                        <Link className="search" to="/Search">Search</Link>
                    </div>
                    <div className="content">
                        <div className="searchPage">
                            <form onSubmit={this.handleSubmit} className="searchContainer">
                                <input  type="number" className="searchInput" value={this.state.items.num} onChange={this.onChange} />
                                <button type="submit" className="searchSubmit">Search</button>
                            </form>
                            <h2>{items.safe_title}</h2>
                            <h3>{items.year}</h3>
                            <img src={this.state.items.img} className="searchImage" title={this.state.items.alt}  alt={this.state.items.title}/>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Search;