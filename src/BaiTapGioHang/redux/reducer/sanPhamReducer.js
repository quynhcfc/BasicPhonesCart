import { dataPhones } from "../../DataSanPham";
import { THEM_GIO_HANG, XEM_CHI_TIET } from "../constants/constants";

let initialState = {
  data: dataPhones,
  chiTietSP: dataPhones[0],
  gioHang: [],
};

export const sanPhamReducer = (state = initialState, { type, payload }) => {
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

      if (indexSP == -1) {
        let spGioHang = { ...payload, soLuong: 1 };

        newGioHang.push(spGioHang);
      } else {
        newGioHang[indexSP].soLuong++;
      }

      state.gioHang = newGioHang;
      return { ...state };
    }
    default:
      return state;
  }
};
