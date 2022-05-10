import React, { Component } from "react";
import ItemSanPham from "./ItemSanPham";

export default class DanhSachSanPham extends Component {
  handleDanhSachSanPham = () => {
    return this.props.dataSP.map((item) => {
      return (
        <ItemSanPham
          item={item}
          handleXemChiTietSP={this.props.handleXemChiTietSP}
          handleThemVaoGioHang={this.props.handleThemVaoGioHang}
          handleThayDoiSoLuong={this.props.handleThayDoiSoLuong}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">
          {this.handleDanhSachSanPham()}
        </div>
      </div>
    );
  }
}
