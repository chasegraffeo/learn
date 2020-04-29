import * as React from "react";
import TestGrid from "./TestGrid";

class Space extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      formatted: null,
    };
  }

  async componentDidMount() {
    try {
      let r = await fetch("/api/images");
      let images = await r.json();
      //map images to gallery format
      let formatted = images.map((image) => {
        let temp = {};
        temp.src = image.link;
        temp.thumbnail = image.link;
        temp.caption = image.explanation;
        temp.customOverlay = (
          <span className={"text-white"}>{image.title}</span>
        );
        return temp;
      });
      this.setState({ images, formatted });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // console.log(this.state.images);
    if (this.state.images != null) {
      return <TestGrid images={this.state.formatted} />;
    } else {
      console.log("got here");
      return null;
    }
  }
}

export default Space;
