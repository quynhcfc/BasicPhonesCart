import React, { Component } from "react";
import { connect } from "react-redux";
import ItemSanPham from "./ItemSanPham";

class DanhSachSanPham extends Component {
  renderDanhSachSanPham = () => {
    return this.props.danhSachSanPham?.map((item, index) => {
      return <ItemSanPham item={item} key={index} />;
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mx-0">{this.renderDanhSachSanPham()}</div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    danhSachSanPham: state.sanPham.data,
  };
};

export default connect(mapStateToProps)(DanhSachSanPham);
