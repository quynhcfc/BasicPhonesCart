import React, { Component } from "react";
import { connect } from "react-redux";

const tangSP = 1;
const giamSP = -1;

class ModalGioHang extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((sanPham) => {
      return (
        <tr>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>
            <img
              src={sanPham.hinhAnh}
              alt=""
              style={{ width: "100px", objectFit: "cover" }}
            />
          </td>
          <td>{sanPham.giaBan.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                this.props.handleThayDoiSoLuong(sanPham.maSP, giamSP);
              }}
            >
              -
            </button>
            {sanPham.soLuong}
            <button
              className="btn btn-success mx-2 "
              onClick={() => {
                this.props.handleThayDoiSoLuong(sanPham.maSP, tangSP);
              }}
            >
              +
            </button>
          </td>
          <td>{(sanPham.giaBan * sanPham.soLuong).toLocaleString()}</td>
        </tr>
      );
    });
  };

  renderTongSoLuong = () => {
    let tongSoLuong = this.props.gioHang.reduce((tong, sanPham) => {
      return (tong += sanPham.soLuong);
    }, 0);
    return tongSoLuong;
  };
  render() {
    return (
      <div>
        <div className="my-3">
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Giỏ hàng
            <div className="rounded bg-danger d-inline-block ml-1 px-1">
              {this.renderTongSoLuong()}
            </div>
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ maxWidth: "70vw" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Sản phẩm đã chọn
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <td>Mã SP</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Giá (vnđ)</td>
                      <td>Số lượng</td>
                      <td>Thành tiền (vnđ)</td>
                    </thead>
                    <tbody>{this.renderGioHang()}</tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Đóng
                  </button>
                  <button type="button" className="btn btn-primary">
                    Mua tất cả
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    gioHang: state.sanPham.gioHang,
  };
};

export default connect(mapStateToProps)(ModalGioHang);
