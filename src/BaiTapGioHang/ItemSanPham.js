import React, { Component } from "react";
import { connect } from "react-redux";
import { THEM_GIO_HANG, XEM_CHI_TIET } from "./redux/constants/constants";

class ItemSanPham extends Component {
  render() {
    let { hinhAnh, giaBan, tenSP } = this.props.item;
    return (
      <div className="col-4">
        <div className="card pt-3 my-3">
          <img
            className="card-img-top mx-auto img-phone-scale"
            src={hinhAnh}
            alt="Card image cap"
            style={{ width: "50%", height: "200px", objectFit: "cover" }}
            onClick={() => {
              this.props.handleXemChiTietSP(this.props.item);
            }}
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
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleXemChiTietSP: (sanPham) => {
      dispatch({
        type: XEM_CHI_TIET,
        payload: sanPham,
      });
    },
    handleThemVaoGioHang: (sanPham) => {
      dispatch({
        type: THEM_GIO_HANG,
        payload: sanPham,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemSanPham);
