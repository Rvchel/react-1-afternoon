import React, {Component} from 'react'


class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val})
    }
    filterNames(userInput) {
        let names = this.state.names;
        let filteredNames = []
    
        for ( let i = 0; i < names.length; i++ ) {
          if ( names[i].includes(userInput) ) {
            filteredNames.push(names[i])
          }
        }
    
        this.setState({ filteredNames: filteredNames })
    }
    render() {
        return (
            <div className="puzzleBox FilterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.names, null, 10) }</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox FilterStringRB">Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}


export default FilterString;