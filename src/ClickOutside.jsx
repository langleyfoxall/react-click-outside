import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ClickOutside extends Component {

    constructor(props) {
        super(props);

        this.ref = props.domRef || React.createRef();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let {onClickOutside, ignoreRefs} = this.props;

        let clickedOutside = true;

        if (ignoreRefs) {
            if (!Array.isArray(ignoreRefs)) {
                ignoreRefs = [ignoreRefs];
            }

            ignoreRefs.forEach((ref) => {
                if (ref.current.contains(event.target)) {
                    clickedOutside = false;
                }
            })
        }

        if (!this.ref.current.contains(event.target) && clickedOutside) {
            onClickOutside(event)
        }
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }


    render() {
        const {children} = this.props;

        return React.cloneElement(children, {ref: this.ref});
    }
}

ClickOutside.propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    ignoreRefs: PropTypes.arrayOf(PropTypes.object),
    domRef: PropTypes.object
};