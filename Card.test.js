
import { render } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

describe("Smokeshots and Snapshots", () => {
  const prop = {msg: "test test test", caption: image1}
  it("renders without crashing", () => {
    render(<Card props={prop}/>);
  });
  it("matches snapshot", function() {
    const {asFragment} = render(<Card props={prop} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("matches snapshot", function() {
    const {asFragment} = render(<Card msg="New Test" caption={image1} />);
    expect(asFragment()).toMatchSnapshot();
  });
})

