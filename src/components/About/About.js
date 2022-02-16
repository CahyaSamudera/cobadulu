import React from 'react';
import './About.css';
import Showcase from '../../images/about.jpg';

const About = () => {
  return (
    <>
      <section className='section' id='about'>
        <div className='container-a'>
          <div className='image-about'>
            <img src={Showcase} alt='' />
          </div>
          <div className='aboutus'>
            <h1>Tentang Kami</h1>
            <p>
              Terima kasih telah mengunjugi kami di Info Translation Center.
              Kami adalah biro jasa penyediaan jasa penerjemah tersumpah resmi
              dan jasa legalisasi dokumen. Layanan jasa kami sebagai berikut:
              Penerjemah Bahasa Inggris, Arab, Jerman, Belanda, Mandarin,
              Perancis, Korea, thailand, Portugis, Spanyol, Rusia, Vietnam,
              Italia. Jasa penerjemah tersumpah kami resmi, menjamin hasil
              terjemahan kami dapat dilegalisasi di Departemen Hukum dan HAM,
              Departemen Luar Negeri, dan kedutaan di Indonesia. Kami
              menerjemahkan segala jenis dokumen legal, medical, technical,
              financial dan dokumen-dokumen lainnya seperti. Ijazah, Raport,
              Transkrip Nilai, Akta Kelahiran, Kartu Keluarga, Kartu Tanda
              Penduduk, Pasport, Skck, Surat Keterangan, dll.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
