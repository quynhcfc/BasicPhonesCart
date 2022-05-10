import React, { Component } from "react";

export default class ItemSanPham extends Component {
  render() {
    let { hinhAnh, giaBan, tenSP } = this.props.item;
    return (
      <div className="card col-4 pt-2 my-3">
        <img
          className="card-img-top mx-auto"
          src={hinhAnh}
          alt="Card image cap"
          style={{ width: "50%", height: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{tenSP}</h5>
          <p className="card-text">{giaBan.toLocaleString()} vnd</p>
          <button
            className="btn btn-success mx-1"
            onClick={() => {
              this.props.handleXemChiTietSP(this.props.item);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={() => {
              this.props.handleThemVaoGioHang(this.props.item);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
