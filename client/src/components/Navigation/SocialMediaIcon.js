import React, {Component} from 'react';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class SocialMediaIcon extends Component {

    constructor() {
        super();

        this.state = {
            isHovered: false
        };

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        });
    };

    render() {
        const color = this.state.isHovered ? this.props.colors.hovered : this.props.colors.default;
        return (
            <a href={this.props.icon.href}>
                <FontAwesomeIcon className="social-media-icon"
                                 icon={["fab", this.props.icon.fontAwesomeName]}
                                 onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} color={color}/>
            </a>
        )
    }
}

export default SocialMediaIcon;





