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

  handleChiTietSP = (sanPham) => {
    this.setState({
      chiTietSP: sanPham,
    });
  };

  handleThemSP = (sanPham) => {
    let newGioHang = [...this.state.gioHang];

    let indexSP = this.state.gioHang.findIndex((index) => {
      return index.maSP === sanPham.maSP;
    });

    if (indexSP == -1) {
      let spGioHang = { ...sanPham, soLuong: 1 };
      newGioHang.push(spGioHang);
    } else {
      newGioHang[indexSP].soLuong++;
    }

    this.setState({
      gioHang: newGioHang,
    });
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
        <ModalGioHang
          gioHang={this.state.gioHang}
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
        />
        <DanhSachSanPham
          dataSP={dataPhones}
          handleXemChiTietSP={this.handleChiTietSP}
          handleThemVaoGioHang={this.handleThemSP}
        />
        <ChiTietSanPham chiTietTungSP={this.state.chiTietSP} />
      </div>
    );
  }
}
