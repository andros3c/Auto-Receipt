import styled from "./page.module.css";
import add from "../../public/add.svg";
import list from "../../public/list.svg";
import price from "../../public/price.svg";
import Image from "next/image";
export default function Home() {
  return (
    <div className={styled.page}>
      <div className={styled["box-wrap"]}>
        <div className={`${styled.box} ${styled["b-1"]}`}>
          <Image src={list} alt="list_icon" />
          Lihat Tagihan Lama
        </div>
        <div className={`${styled.box} ${styled["b-2"]}`}>
          <Image src={add} alt="add_icon" />
          Tambah Tagihan Baru
        </div>
        <div className={`${styled.box} ${styled["b-3"]}`}>
          <Image src={price} alt="price_icon" />
          Harga dan Daftar Barang
        </div>
      </div>
    </div>
  );
}
