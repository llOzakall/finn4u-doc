import CustomImage from "@components/CustomImage";
import Link from "next/link";

function Banner() {
  return (
    <div className="register-banner">
      <CustomImage src="/banner-home-emp.png" alt="banner-home-emp" />
      <Link className="btn btn-white" href="/consignment-register">
        ลงทะเบียนเป็น ผู้ขายฝาก
      </Link>
      <Link className="btn btn-white" href="/investment-register">
        ลงทะเบียนเป็น นักลงทุน
      </Link>
    </div>
  );
}
export default Banner;
