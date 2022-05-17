import { dataPhones } from "../../DataSanPham";
import {
  THAY_DOI_SO_LUONG,
  THEM_GIO_HANG,
  XEM_CHI_TIET,
} from "../constants/constants";

let initialState = {
  data: dataPhones,
  chiTietSP: dataPhones[0],
  gioHang: [],
};

export const sanPhamReducer = (
  state = initialState,
  { type, payload, idSP, value }
) => {
  switch (type) {
    case XEM_CHI_TIET: {
      state.chiTietSP = payload;
      return { ...state };
    }

    case THEM_GIO_HANG: {
      let newGioHang = [...state.gioHang];

      let indexSP = state.gioHang.findIndex((item) => {
        return item.maSP === payload.maSP;
      });

      if (indexSP === -1) {
        let spGioHang = { ...payload, soLuong: 1 };

        newGioHang.push(spGioHang);
      } else {
        newGioHang[indexSP].soLuong++;
      }

      state.gioHang = newGioHang;
      return { ...state };
    }

    case THAY_DOI_SO_LUONG: {
      let gioHangCopy = [...state.gioHang];

      let indexSP = state.gioHang.findIndex((index) => {
        return index.maSP === idSP;
      });

      if (indexSP !== -1) {
        gioHangCopy[indexSP].soLuong += value;

        gioHangCopy[indexSP].soLuong === 0 && gioHangCopy.splice(indexSP, 1);
      }
      state.gioHang = gioHangCopy;
      return { ...state };
    }
    default:
      return state;
  }
};
