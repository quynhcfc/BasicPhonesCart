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

  render() {
    return (
      <div>
        <div className="display-4 my-2">Giỏ hàng sử dụng redux</div>
        <a
          href="https://github.com/quynhcfc/CodeLaiGioHang.git"
          className="btn btn-success"
        >
          Link source
        </a>
        <ModalGioHang />
        <DanhSachSanPham />
        <ChiTietSanPham />
      </div>
    );
  }
}
