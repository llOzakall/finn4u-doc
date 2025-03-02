"use client";
import CustomImage from "@components/CustomImage";
import Link from "next/link";
import Banner from "../banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEye,
  faHammer,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function PropertyPage() {
  const [galleryOpen, setGallery] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");

  const handleGallery = (e) => {
    e.preventDefault();
    const clickedImage = e.target;
    setModalImage(clickedImage.src);

    setGallery(true);
  };

  return (
    <div className="property-sale-detail">
      <Banner />
      <div className="container bg-white pb-5">
        <p className="title-content font2">ทรัพย์สินขายฝาก</p>
        <section className="photo-gallery">
          <div className="container">
            <div className="row gallery-grid">
              <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <Link
                  className="gallery-item h-100"
                  href="#"
                  onClick={handleGallery}
                >
                  <CustomImage
                    src="/locate1.png"
                    className="img-fluid h-100"
                    alt="locate1"
                  />
                </Link>
              </div>
              <div className="col col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <Link
                  className="gallery-item"
                  href="#"
                  onClick={handleGallery}
                  style={{}}
                >
                  <CustomImage
                    src="/locate2.png"
                    className="img-fluid "
                    alt="locate2"
                  />
                </Link>
                <Link
                  className="gallery-item"
                  href="/locate3.png"
                  onClick={handleGallery}
                  style={{}}
                >
                  <CustomImage
                    src="/locate3.png"
                    className="img-fluid "
                    alt="locate3"
                  />
                </Link>
                <Link
                  className="gallery-item"
                  href="/locate4.png"
                  onClick={handleGallery}
                  style={{}}
                >
                  <CustomImage
                    src="/locate4.png"
                    className="img-fluid "
                    alt="locate4"
                  />
                </Link>
              </div>
            </div>
            <div className="time">
              <div className="row">
                <div className="col-lg-9">
                  <div className="d-flex">
                    {/* <!-- ใส่ Class bg-red ต่อจาก Class icon จะเปลี่ยนพื้นหลังสีเเดง --> */}
                    <div className="icon">
                      <FontAwesomeIcon icon={faClock} />
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <span className="font2">
                      รอการลงทุน
                      <span className="text-danger font2">
                        1 วัน 3.50 ชั่วโมง
                      </span>
                    </span>
                    <span className="date-sale font2">
                      ประกาศขายเมื่อ 11 เมษายน 2565
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  {/* <!-- เอา class d-none ออกจะเเสดงสถานะ sold --> */}
                  <div className="sold d-none">
                    <span>SOLD</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="location">
              <h3 className="text-primary font2">ลาดกระบัง, กรุงเทพมหานคร</h3>
              <div className="badge font2">ที่ดินเปล่า</div>
              <Link href="invest-notice.php" className="float-right font2 mx-2">
                ร่วมลงทุน
              </Link>
              <Link href="invest-notice.php" className="float-right font2">
                ลงทุน
              </Link>
            </div>

            <div className="detail">
              <div className="locataion">
                <ul>
                  <li>
                    <div className="cust">
                      <CustomImage
                        src="/ic-lo1.svg"
                        alt="ic-lo1"
                        style={{ width: "30px", height: "auto" }}
                      />
                      <span className="font2">เลขที่ฝากขาย 000023</span>
                    </div>
                    <div className="manage">
                      <FontAwesomeIcon icon={faEye} />
                      <span className="mx-2 font2">123</span>
                      <FontAwesomeIcon icon={faHammer} className="mx-2" />
                      <span className="font2">5</span>
                    </div>
                  </li>
                  <li>
                    <CustomImage
                      src="/ic-lo2.svg"
                      alt="ic-lo2"
                      style={{ width: "30px", height: "auto" }}
                    />

                    <span className="font2">0 ไร่ 0 งาน 20 ตารางวา</span>
                  </li>
                  <li>
                    <CustomImage
                      src="/ic-lo3.svg"
                      alt="ic-lo3"
                      style={{ width: "30px", height: "auto" }}
                    />
                    <span className="font2">มูลค่าสินทรัพย์ค้ำประกัน</span>3.2
                    ล้านบาท
                  </li>
                  <li>
                    <CustomImage
                      src="/ic-lo4.svg"
                      alt="ic-lo4"
                      style={{ width: "30px", height: "auto" }}
                    />
                    <span className="font2">ราคาขายฝาก</span>1,450,000บาท
                  </li>
                  <li>
                    <CustomImage
                      src="/ic-lo5.svg"
                      alt="ic-lo5"
                      style={{ width: "30px", height: "auto" }}
                    />
                    <span className="font2">11 เมษายน 2565</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="badegroup">
              <span className="badge font2">ใกล้ห้างสรรพสินค้า</span>
              <span className="badge font2">ใกล้แหล่งชุมชน</span>
              <span className="badge font2">ร้านค้า</span>
              <span className="badge font2">สวนสาธารณะ</span>
            </div>
          </div>
        </section>

        <Modal
          className="modal-image-gallery"
          show={galleryOpen}
          onHide={() => setGallery(false)}
          size="xl"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="show-image">
              <CustomImage src={modalImage} alt="Modal Image" style={{}} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
export default PropertyPage;
