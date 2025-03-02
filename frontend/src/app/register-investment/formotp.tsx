"use client";
import {useState} from "react";
import { Button } from "react-bootstrap";

function Formotp() {
	const [otp, setOtp] = useState(Array(6).fill(""));

	const handleChange = (index : number, e : React.ChangeEvent < HTMLInputElement >) => {
		const value = e.target.value.replace(/\D/g, ""); 
		const newOtp = [...otp];
		newOtp[index] = value.slice(-1); 
		setOtp(newOtp);

		if (value && index < 5) {
			document.getElementById(`otp-${
				index + 1
			}`) ?. focus();
		}
	};
	return (
		<div className="sec-pass">
			<h2 className="text-center text-primary font2">รหัสยืนยันถูกส่งไปเรียบร้อยแล้ว</h2>

			<div className="tell">
				<p className="font2">กรุณากรอกรหัสยืนยันที่ถูกส่งไปยัง
				</p>
				<span className="text-primary font2">+66 891234567</span>
				<span className="font2">เพื่อดำเนินการต่อ</span>
			</div>

			<fieldset className="otp-password">
				<div className="d-flex">
					{
					otp.map((digit, index) => (
						<input key={index}
							id={
								`otp-${index}`
							}
							type="text"
							className="form-control form-control--otp js-otp-input"
							value={digit}
							onChange={
								(e) => handleChange(index, e)
							}
							inputMode="numeric"
							pattern="[0-9]*"
							autoComplete="one-time-code"
							maxLength={1}
							required/>
					))
				} </div>
			</fieldset>

			<Button className="btn-clean font2">ส่งรหัส OTP อีกครั้ง</Button>
		</div>
	)
}
export default Formotp
