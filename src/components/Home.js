import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentWillMount(){
        fetch('https://xkcd.now.sh/?comic=latest')
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
                    <div className="content" key={items.id}>
                        <h2>{items.safe_title}</h2>
                        <h3>Year: {items.year}</h3>
                        <h3>Month: {items.month}</h3>
                        <h3>Number: {items.num}</h3>
                        <img src={items.img} className="latestImage" title={items.alt}  alt={items.title}/>
                    </div>
                </div>
            )
    }
}

export default Home;