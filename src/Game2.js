import React, {Component} from 'react'

class Game2 extends Component{
    constructor(props){
        super(props);
        console.log()
    }

    render() {
        return(
            <div>
                   <h1>{this.props.animal}</h1>
            </div>
        );
    }

}
export default Game2;
