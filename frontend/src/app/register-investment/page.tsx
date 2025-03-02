"use client";
import CustomImage from "@components/CustomImage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Formregister from "./formregister";
import Formotp from "./formotp";
import Termandcon from "./termandcon";
import Verifyidcard from "./verifyidcard";
import UploadDoc from "./uploaddoc";

function page() {
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
        <CustomImage src="/banner_invester.png" alt="banner_invester" />
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
                  <CustomImage
                    src="/reg-step1.png"
                    alt="reg-step1"
                    style={{
                      height: "auto",
                    }}
                  />
                  <p className="font2 fw-bold">ลงทะเบียน</p>
                </div>
                <div className="polygon">
                  <CustomImage
                    src="/Polygon2.png"
                    alt="Polygon2"
                    style={{
                      height: "auto",
                    }}
                  />
                </div>
                <div className="child">
                  <CustomImage
                    src="/reg-step2.png"
                    alt="reg-step2"
                    style={{
                      height: "auto",
                    }}
                  />
                  <p className="font2">ยืนยันตัวตน</p>
                </div>
                <div className="polygon">
                  <CustomImage
                    src="/Polygon2.png"
                    alt="Polygon2"
                    style={{
                      height: "auto",
                    }}
                  />
                </div>
                <div className="child">
                  <CustomImage
                    src="/reg-step3.png"
                    alt="reg-step3"
                    style={{
                      height: "auto",
                    }}
                  />
                  <p className="font2">อัพโหลดเอกสาร</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && <Formregister />}
              {step === 2 && <Formotp />}
              {step === 3 && <Termandcon />}
              {step === 4 && <Verifyidcard />}
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
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default page;
