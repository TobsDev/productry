import React from 'react';
import Question from '../question/question';
import Button from '../button/button';
import faqs from '../../content/faqs.json';

class Faqs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        }
        this.toggleAnswer = this.toggleAnswer.bind(this)
    }
    toggleAnswer(e) {
        e.target.nextSibling.classList.toggle('question__answer--toggled')
        e.target.children[1].children[0].classList.toggle('question__arrow--active')
        e.target.children[1].children[0].classList.toggle('question__arrow')
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    render() {
        return (
            <div className="faqs" id="faqs">
                <div className="faqs__viewport">
                    <h2 className="faqs__title">Frequentl Asked Questions</h2>
                    <p className="faqs__description">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                    <ul className="faqs__modal-list">
                        {faqs.map(faq => {
                            return(
                                <li className="faqs__list-item" key={faq.id}>
                                    <Question 
                                        question={faq.question}
                                        active={this.state.showAnswer}
                                        answer={faq.answer}
                                        toggleAnswer={this.toggleAnswer}
                                        key={faq.id}
                                    />
                                </li>
                            );
                        })}
                        
                    </ul>
                    <Button cta="More Info" />
                </div>
            </div>
        )
    }
}

export default Faqs

