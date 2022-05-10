import React, { Component } from "react";

export default class ChiTietSanPham extends Component {
  render() {
    let { hinhAnh, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau } =
      this.props.chiTietTungSP;
    return (
      <div className="container">
        <div className="row mx-0 py-3 border">
          <div className="col-5">
            <img src={hinhAnh} alt="" style={{ width: "60%" }} />
          </div>
          <div className="col-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table text-center">
              <tbody>
                <tr>
                  <td className="col-3">Tên sản phẩm:</td>
                  <td className="col-5">{tenSP}</td>
                </tr>
                <tr>
                  <td className="col-3">Màn hình:</td>
                  <td className="col-5">{manHinh}</td>
                </tr>
                <tr>
                  <td className="col-3">Hệ điều hành:</td>
                  <td className="col-5">{heDieuHanh}</td>
                </tr>
                <tr>
                  <td className="col-3">Camera trước:</td>
                  <td className="col-5">{cameraTruoc}</td>
                </tr>
                <tr>
                  <td className="col-3">Camera sau:</td>
                  <td className="col-5">{cameraSau}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
