"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import FormRegister from "./formregister";
import FormOtp from "./formotp";
import TermsAndCon from "./termsandcon";
import VerifyIdcard from "./verifyidcard";
import UploadDoc from "./uploaddoc";
import CustomImage from "../../components/CustomImage";

function regisseller() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => (prev >= 6 ? 6 : prev + 1));

  const prevStep = () => setStep((prev) => (prev <= 1 ? 1 : prev - 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="banner-regis">
        <Image
          src="/banner_regis1.png"
          alt="banner_regis1"
          width={100}
          height={100}
          sizes="100vm"
          style={{
            height: "auto",
          }}
          priority
        />
      </div>

      <div className="register-seller">
        <div className="container">
          <div className="card-form-main">
            <div className="wrap">
              <h4 className="title-main font2">
                ลงทะเบียนเป็นผู้ขายฝากกับ Finn4U
              </h4>
              <div className="step">
                <div className="child">
                  <Image
                    src="/reg-step1.png"
                    alt="reg-step1"
                    width={100}
                    height={100}
                    sizes="100vm"
                    style={{
                      height: "auto",
                    }}
                    priority
                  />
                  <p className="font2 fw-bold">ลงทะเบียน</p>
                </div>
                <div className="polygon">
                  <Image
                    src="/Polygon2.png"
                    alt="Polygon2"
                    width={100}
                    height={100}
                    sizes="100vm"
                    style={{
                      height: "auto",
                    }}
                    priority
                  />
                </div>
                <div className="child">
                  <Image
                    src="/reg-step2.png"
                    alt="reg-step2"
                    width={100}
                    height={100}
                    sizes="100vm"
                    style={{
                      height: "auto",
                    }}
                    priority
                  />
                  <p className="font2">ยืนยันตัวตน</p>
                </div>
                <div className="polygon">
                  <Image
                    src="/Polygon2.png"
                    alt="Polygon2"
                    width={100}
                    height={100}
                    sizes="100vm"
                    style={{
                      height: "auto",
                    }}
                    priority
                  />
                </div>
                <div className="child">
                  <Image
                    src="/reg-step3.png"
                    alt="reg-step3"
                    width={100}
                    height={100}
                    sizes="100vm"
                    style={{
                      height: "auto",
                    }}
                    priority
                  />
                  <p className="font2">อัพโหลดเอกสาร</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              {step === 1 && <FormRegister />}
              {step === 2 && <FormOtp />}
              {step === 3 && <TermsAndCon />}
              {step === 4 && <VerifyIdcard />}
              {step === 5 && <UploadDoc />}
              {step === 6 && (
                <>
                  <div className="text-center">
                    <CustomImage
                      src="/reg-step1.png"
                      alt="reg-step1"
                      style={{
                        width: "40%",
                        height: "auto",
                      }}
                    />
                    <h2 className="text-primary font2">ลงทะเบียนสำเร็จ</h2>
                    <p className="font2">
                      ระบบได้รับข้อมูลการลงทะเบียนของท่านเรียบร้อยแล้ว
                    </p>
                    <p className="font2">
                      จะมีเจ้าหน้าที่ติดต่อกลับภายใน 3-5 วันทำการ
                    </p>
                  </div>

                  <div className="submit-group">
                    <Button variant="primary" type="submit">
                      กลับสู่หน้าหลัก
                    </Button>
                  </div>
                </>
              )}
              {step != 6 && (
                <div className="submit-group">
                  <Button variant="white" onClick={prevStep}>
                    ย้อนกลับ
                  </Button>
                  <Button variant="primary" onClick={nextStep}>
                    ถัดไป
                  </Button>
                </div>
              )}{" "}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default regisseller;
