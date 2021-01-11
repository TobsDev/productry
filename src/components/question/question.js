import React from 'react';
import arrow from '../../images/icon-arrow.svg'

class Question extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const { toggleAnswer } = this.props

        return(
            <div className="question">
                <div className="question__head" onClick={toggleAnswer}>
                    <h4 className="question__title">{this.props.question}</h4>
                    <div className="question__arrow">
                        <img src={arrow} alt=""/>
                    </div>
                </div>
                <p className="question__answer question__answer--toggled" id={this.props.id}>{this.props.answer}</p>
            </div>
        )
    }
}

export default Question