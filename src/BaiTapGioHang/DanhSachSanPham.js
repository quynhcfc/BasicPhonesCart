import React, { Component } from "react";
import { connect } from "react-redux";
import ItemSanPham from "./ItemSanPham";

class DanhSachSanPham extends Component {
  renderDanhSachSanPham = () => {
    return this.props.danhSachSanPham?.map((item, index) => {
      return (
        <ItemSanPham
          item={item}
          key={index}
          handleThayDoiSoLuong={this.props.handleThayDoiSoLuong}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">
          {this.renderDanhSachSanPham()}
        </div>
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
