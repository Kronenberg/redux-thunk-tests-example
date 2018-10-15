import React from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
    FIRST_TEST_CLASS: "FIRST_TEST_CLASS",
    SECOND_TEST_CLASS: "SECOND_TEST_CLASS"
};

export default class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter = () => {
        this.setState({class: STATUS.HOVERED});
        console.log('_onMouseEnter');
    }

    _onMouseLeave = () => {
        this.setState({class: STATUS.NORMAL});
        console.log('_onMouseLeave');
    }

    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                test
            </a>
        );
    }
}