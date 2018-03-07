import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="box">
                <form>
                    <input type="text" id="zoeken" name="" placeholder="Zoeken"/>
                    <button className="icon"><span>icon</span></button>
                </form>
            </div>
        );
    }
}

export default Form;