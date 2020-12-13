import React, {Component} from 'react';
// import FetchDisplay from './FetchDisplay';

export default class Fetch extends Component {
    constructor(props) {
        super(props)
        this.randomButton = this.randomButton.bind(this)
        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        console.log('Component Mounted!');
        // fetch('https://random.dog/woof.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({
        //             img: data.url
        //         })
        //         console.log(this.state.img)
        //     })
        this.randomButton();
    }

    randomButton() {
        // e.prevent.default()

        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.url
                })
                console.log(this.state.img)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <h1>Random Dog Photo</h1>
                <button onClick={this.randomButton}>Find another</button>
                <br/>
                <img alt='random dog' src={this.state.img}/>
            </div>
        )
    }
}