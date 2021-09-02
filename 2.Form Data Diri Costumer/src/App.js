import logo from './assets/img/BRI_2020.svg.png';
import './App.css';
import './assets/css/formdatadiri.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <div className="d-flex">
              <a className="back" href="#">Kembali ke Home</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-4 mb-4">
        <h3 className="mb-4">Form Screening <span className="text-primary">KPR</span></h3>
        <div className="bg-form bg-light">
          <form>
            <h5>Screening Pemohon</h5>
            <hr />
            <div className="row">
              <label for="inputNomorKtp" className="col-sm-4 col-form-label">Nomor Induk KTP <span className="text-danger">*</span></label>
              <div className="col-sm-8">
                <input type="number" className="form-control" id="inputNomorKtp" required />
              </div>
            </div>
            <div className="row">
              <label for="inputNamaLengkap" className="col-sm-4 col-form-label">Nama Lengkap <span className="text-danger">*</span></label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="inputNamaLengkap" required />
              </div>
            </div>
            <div className="row">
                <label for="tempat_lahir" className="col-sm-4 col-form-label" required>Tempat, Tanggal Lahir <span className="text-danger">*</span></label>
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-md-7">
                      <input type="text" className="form-control" name="tempat_lahir" id="tempat_lahir" required />
                    </div>
                    <div className="col-md-5">
                      <input type="date" className="form-control" id="inputTTL" name="tanggal_lahir" required />
                    </div>
                  </div>
                </div>
            </div>
            <div className="row">
              <label className="col-form-label col-sm-4 pt-0">Status Pernikahan <span className="text-danger">*</span></label>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                      <label className="form-check-label" for="gridRadios1">
                        Belum Menikah
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                      <label className="form-check-label" for="gridRadios2">
                        Menikah
                      </label>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                      <label className="form-check-label" for="gridRadios3">
                        Duda/Janda/Cerai
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <label for="inputAlamat" className="col-sm-4 col-form-label">Alamat Domisili <span className="text-danger">*</span></label>
              <div className="col-sm-8">
                <textarea type="text" className="form-control" id="AlamatTextArea" rows="3"></textarea>
              </div>
            </div>
            <div className="row">
                <label for="inputTTL" className="col-sm-4 col-form-label">Jenis Pekerjaan <span className="text-danger">*</span></label>
                <div className="col-sm-8">
                  <select name="jenis_pekerjaan" id="jenis_pekerjaan" className="form-control">
                    <option value="">-- Pilih Jenis Pekerjaan --</option>
                    <option value="pns">Pegawai Negeri</option>
                    <option value="swasta">Pegawai Swasta</option>
                    <option value="pengusaha">Pengusaha</option>
                    <option value="pekerjaan_lepas">Pekerja Lepas</option>
                  </select>
                </div>
            </div> 
            <div className="row">
                <label for="pendapatan" className="col-sm-4 col-form-label">Pendapatan per Bulan <span className="text-danger">*</span></label>
                <div className="col-sm-8">
                  <input type="number" min="1" name="pendapatan" id="pendapatan" className="form-control" />
                </div>
            </div> 
            <div className="row">
                <label for="pendapatan" className="col-sm-4 col-form-label">Bukti Selfie KTP <span className="text-danger">*</span></label>
                <div className="col-sm-8">
                  <input type="file" min="1" name="pendapatan" id="pendapatan" className="form-control" />
                </div>
            </div> 
            <div className="row">
                <label for="pendapatan" className="col-sm-4 col-form-label">Bukti Slip Gaji <span className="text-danger">*</span></label>
                <div className="col-sm-8">
                  <input type="file" min="1" name="pendapatan" id="pendapatan" className="form-control" />
                </div>
            </div>
            <div className="alert alert-warning">
              Setelah Anda berhasil melanjutkan proses pengecekan ini, Anda tidak dapat mengubah data-data yang ada pada form screening ini.  
            </div> 
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary rounded-pill">Setuju & Lanjutkan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
