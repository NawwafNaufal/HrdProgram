import { Button, Form, Col, Row, Container, Card } from 'react-bootstrap';
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import './Pdf.css'; // Pastikan ini sudah ada
import { FaRegFileAlt } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { MdOutlineSaveAlt } from "react-icons/md";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { GoPencil } from "react-icons/go";

const DocumentForm = () => {
  return (
    <Container className="mt-5 document-container">
      <h1 className="text-center document-title">Document</h1>
      <Row className="form-row">
        {/* Form Kontrak Kerja (Kiri) */}
        <Col md={4}>
          <Card className="form-card">
            <Card.Header className="form-header mb-2">
              <FaRegFileAlt className="icon-file" /> Form Surat Panggilan
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className='mb-2 ' controlId="nama">
                  <Form.Label className='mb-1'>Nama</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="pekerjaan">
                  <Form.Label className='mb-1'>Pekerjaan</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="hari">
                  <Form.Label className='mb-1'>Hari</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="tanggal">
                  <Form.Label className='mb-1'>Tanggal</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="keperluan">
                  <Form.Label className='mb-1'>Keperluan</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
            </Card.Body>
            <Button variant="dark" type="submit" className="submit-btn">
              Submit
            </Button>
          </Card>
        </Col>

        {/* File Preview (Tengah) */}
        <Col md={4} className="text-center">
          <Card className="file-preview-card">
            <Card.Header className="form-header ">
              <FaRegFileAlt className="icon-file" /> File Preview
            </Card.Header>
            <Card.Body className="text-center">
              <BsFileEarmarkPdfFill style={{ fontSize: '180px' }} className="icon-file mb-3 mt-3" />
              <br />
              <hr className='garis-pdf' />
              <div className='pre-view'>
                <h5 className="mt-3">Create Surat Panggilan dan Kontrak kerja Harian</h5>
                <p className='descrip-name'>Description: </p>
                <p>
                  Fitur Surat Panggilan dan Kontrak Kerja Harian memungkinkan HR untuk
                  mengisi data karyawan dan otomatis menghasilkan PDF untuk panggilan kerja atau
                  perjanjian kerja harian.
                  <br />
                  <hr className='garis-pdf' />
                  <h4 className='arr-name mt-4'><span><BsArrowLeftSquareFill style={{ fontSize: '25px' }} /></span>Form Surat Panggilan</h4>
                  <h4 className='arr-name mb-4'><span><BsArrowRightSquareFill style={{ fontSize: '25px' }} /></span>Form Surat Panggilan</h4>
                  <div>
                    <hr className='garis-pdf mb-2' />
                    <div className='button-save'>
                      <MdOutlineSaveAlt className='save-1' />
                      <GoPencil className='edit-pen' />
                      <MdOutlineSaveAlt className='save-2' />
                      <hr className='garis-pdf' />
                    </div>
                  </div>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Form Surat Panggilan (Kanan) */}
        <Col md={4}>
          <Card className="form-card">
            <Card.Header className="form-header mb-2">
              <FaRegFileAlt className="icon-file" /> Form Kontrak Kerja
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Label className='mb-3'>Yang bertanda tangan:</Form.Label>
                <Form.Group controlId="namaTandaTangan">
                  <Form.Label className='mb-1'>Nama</Form.Label>
                  <Form.Control className='mb-2' type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="jabatan">
                  <Form.Label className='mb-1'>Jabatan:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="namaKaryawan">
                  <Form.Label className='mb-1'>Nama Karyawan:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="jenisKelamin">
                  <Form.Label className='mb-1'>Jenis Kelamin:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="tanggalLahir">
                  <Form.Label className='mb-1'>Tempat Tanggal Lahir:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-3' controlId="alamat">
                  <Form.Label className='mb-1'>Alamat:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
            </Card.Body>
            <Button variant="dark" type="submit" className="submit-btn-2">
              Submit
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentForm;
