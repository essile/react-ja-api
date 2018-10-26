import React, { Component } from 'react';

class EtsintäForm extends Component {

    state = { lomake: "" }

    tekstiMuuttuu = (teksti) => {
        this.setState({ lomake: teksti.target.value })
    }

    haeTuotettaNimellä = (event) => {
        this.props.etsiTuote(this.state);
        this.setState({ lomake: '' });
    }

    render() {
        return (
            <div>Etsi tuotetta nimellä:<br />
                <input
                    type="text"
                    value={this.state.lomake}
                    onChange={this.tekstiMuuttuu}
                />
                <input type="button" value="Etsi" onClick={this.haeTuotettaNimellä} /><br/>
            </div>
        );
    }
}

export default EtsintäForm;