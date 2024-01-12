import React, { Component } from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'
class BackToTop extends Component {
  state = {
    is_visible: false,
  };

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <>
        <div className="backtotop">
          {is_visible && (
            <div onClick={() => this.scrollToTop()}>
              <div className="icon">
                <AiOutlineArrowUp/>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default BackToTop;
