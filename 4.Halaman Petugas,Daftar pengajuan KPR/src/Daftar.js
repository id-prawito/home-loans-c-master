import { Row, Col } from "react-bootstrap";


function DaftarPengajuan (props) {
    return(
        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nomor</th>
                                    <th scope="col">Tanggal Pengajuan</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Rekomendasi</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>8 JReact.Fragmenti 2021 10.00 WIB</td>
                                    <td>Asep Sunandar</td>
                                    <td>Menunggu Persetujuan</td>
                                    <td>Tidak</td>
                                    <td><a href="">lihat detail</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>5 JReact.Fragmenti 2021 13.00 WIB</td>
                                    <td>Budi Rangga</td>
                                    <td>Disetujui</td>
                                    <td>Setujui</td>
                                    <td><a href="">lihat detail</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>18 JReact.Fragmenti 2021 14.00 WIB</td>
                                    <td>Gayus Tambunan</td>
                                    <td>Ditolak</td>
                                    <td>Tidak</td>
                                    <td><a href="">lihat detail</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>10 Juni 2021 21.00 WIB</td>
                                    <td>Nia Kurniasih</td>
                                    <td>Menunggu Verifikasi</td>
                                    <td>-</td>
                                    <td><a href="">lihat detail</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>10 Juni 2021 20.00 WIB</td>
                                    <td>Jaja Sukaraja</td>
                                    <td>Terverfikasi</td>
                                    <td>-</td>
                                    <td><a href="">lihat detail</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>9 Juni 2021 20.00 WIB</td>
                                    <td>Koswara</td>
                                    <td>Tidak Terverfikasi</td>
                                    <td>-</td>
                                    <td><a href="">lihat detail</a></td>
                                </tr>
                            </tbody>
                        </table>
    )
}
export default DaftarPengajuan