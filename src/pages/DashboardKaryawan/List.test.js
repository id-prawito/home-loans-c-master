import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("test list pengajuan", () => {
  const wrapper = shallow(<h3>Data Diri Pengajuan KPR</h3>);

  it("Periksa apakah komponen di render dengan baik", () => {
    expect(wrapper.find("h3").text()).toEqual("Data Diri Pengajuan KPR");
  });

  it("Cuma punya 1 komponen", () => {
    expect(wrapper.find("h3")).toHaveLength(1);
  });
});
