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
            <div className={"menubar-row"}>
                <a href={this.props.icon.href} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} target={"_blank"}>
                    <FontAwesomeIcon className="social-media-icon"
                                     icon={["fab", this.props.icon.fontAwesomeName]}
                                     color={color}/>
                </a>
            </div>

        )
    }
}

export default SocialMediaIcon;





