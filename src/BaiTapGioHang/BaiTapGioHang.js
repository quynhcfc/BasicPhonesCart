import React, { Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";
import DanhSachSanPham from "./DanhSachSanPham";
import { dataPhones } from "./DataSanPham";
import ModalGioHang from "./ModalGioHang";

export default class BaiTapGioHang extends Component {
  state = {
    data: dataPhones,
    chiTietSP: dataPhones[0],
    gioHang: [],
  };

  handleThayDoiSoLuong = (idSP, giaTri) => {
    let gioHangCopy = [...this.state.gioHang];

    let indexSP = this.state.gioHang.findIndex((index) => {
      return index.maSP == idSP;
    });

    if (indexSP !== -1) {
      gioHangCopy[indexSP].soLuong += giaTri;

      gioHangCopy[indexSP].soLuong === 0 && gioHangCopy.splice(indexSP, 1);
    }
    this.setState({
      gioHang: gioHangCopy,
    });
  };

  render() {
    return (
      <div>
        <div className="display-4 my-2">Bài tập giỏ hàng</div>
        <ModalGioHang handleThayDoiSoLuong={this.handleThayDoiSoLuong} />
        <DanhSachSanPham />
        <ChiTietSanPham />
      </div>
    );
  }
}
