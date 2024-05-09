import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className=" bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto p-5 container grid grid-cols-1 md:grid-cols-4 gap-10 ">
        <div>
          <h3 className="text-lg font-semibold mb-4">Fotocopy Mistar</h3>
          <p>
            Fotocopy Mistar bergerak di bidang jasa penggandaan dokumen atau
            fotocopy dan penjilidan. Kami siap melayani anda dengan kualitas
            yang terbaik dan untuk harga jangan khawatir karena disini harga
            sesuai dengan kualitas.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Ada Pertanyaan?</h3>
          <p className="mb-2">FOTOCOPY MISTAR</p>
          <p className="mb-2">
            Jl. Bibis Raya, Jetis, Tamantirto, Kec. Kasihan, Kabupaten Bantul,
            Daerah Istimewa Yogyakarta 55183
          </p>
          <p>081230498560</p>
          <p>Senin - Minggu (07.00 - 21.00 WIB)</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Artikel Terbaru</h3>
          <ul>
            <li>• Manfaat Notebook Catatan sebagai Cerminan Pribadi Unggul</li>
            <li>• Jenis Penjilidan Buku Yang Perlu Anda Ketahui</li>
            <li>• Pengertian Mesin Fotocopy dan 3 Keunggulan Pemakaiannya</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasi</h3>

          <div className="">
            <Link href="/" className="hover:text-cyan-200">
              • Home
            </Link>
            <br />
            <Link href="/home" className="hover:text-cyan-200">
              • Mistar
            </Link>
            <br />
            <Link href="/about" className="hover:text-cyan-200">
              • About
            </Link>
            <br />
            <Link href="/contact" className="hover:text-cyan-200">
              • Contact
            </Link>
            <br />
            <Link href="/galery" className="hover:text-cyan-200">
              • Galery
            </Link>
            <br />
            <Link href="/service" className="hover:text-cyan-200">
              • Serivce
            </Link>
          </div>
        </div>
      </div>
      <div className=" container mx-auto mt-8 border-t border-gray-700 pt-4 text-center">
        <p>
          Copyright &copy; 2024 Fotocopy MISTAR. All rights reserved | Created
          with &#9829; by Argretya
        </p>
      </div>
    </div>
  );
}

export default Footer;
