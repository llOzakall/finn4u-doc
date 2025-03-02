"use client";
import Link from "next/link";
import CustomImage from "@components/CustomImage";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Modal } from "react-bootstrap";
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCheckSquare } from "react-icons/fa";

function Login({ loginOpen, handleLogin }: {
	loginOpen: boolean,
	handleLogin: () => void
}) {


	const [loginModelOpen, setLoginOpen] = useState<boolean>();
	const [registerOpen, setRegisterOpen] = useState(false);


	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userType, setUserType] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		const res = await signIn("credentials", { email, password, redirect: false });

		if (res?.url) {
			handleLogin();
			redirect(res.url);
		}

		if (res?.error) {
			setError("Invalid email or password.");
		}

		setLoading(false);
	};

	useEffect(() => {
		setLoginOpen(loginOpen);
	}, [loginOpen])
	return (
		<>
			<Modal className="font2 modallogin" size="lg"
				show={loginModelOpen}
				onHide={
					() => {
						handleLogin();
					}
				}
				centered>
				<div className="row">
					<div className="col-lg-4">
						<div className="left">
							<h2 className="font2">เข้าใช้งาน</h2>
							<h2 className="font2">อย่างไร้กังวล</h2>
							<div className="list">
								<CustomImage src="/log1.svg" alt="log1"
									style={
										{
											height: "auto"
										}
									} />
								<span className="font2">
									เรารักษาข้อมูลของคุณเป็นความลับสูงสุด
								</span>
							</div>
							<div className="list">
								<CustomImage src="/safe.svg" alt="safe"
									style={
										{
											height: "auto"
										}
									} />
								<span>ระบบรักษาความปลอดภัยที่ธนาคารยอมรับ</span>
							</div>

							<div className="text-center">
								<CustomImage src="/office.png" alt="office"
									style={
										{
											height: "auto"
										}
									} />
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<form className="right"
							onSubmit={handleSubmit}>
							<h4 className="title">เข้าสู่ระบบ</h4>
							<div className="checklogin">
								<div className="form-check">
									<div className="group">
										<input className="form-check-input"
											onChange={
												(e) => setUserType(e.target.value)
											}
											type="radio"
											name="usertype"
											value="general"
											id="general" />
										<label className="form-check-label" htmlFor="general">
											ผู้ใช้ทั่วไป
										</label>
									</div>
									<div className="group">
										<input className="form-check-input"
											onChange={
												(e) => setUserType(e.target.value)
											}
											type="radio"
											name="usertype"
											value="consignment"
											id="consignment" />
										<label className="form-check-label" htmlFor="consignment">
											ผู้ขายฝาก
										</label>
									</div>
									<div className="group">
										<input className="form-check-input"
											onChange={
												(e) => setUserType(e.target.value)
											}
											type="radio"
											name="usertype"
											value="invester"
											id="invester" />
										<label className="form-check-label" htmlFor="invester">
											นักลงทุน
										</label>
									</div>
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="email" className="form-label font2">
									อีเมล
								</label>
								<input type="email"
									onChange={
										(e) => setEmail(e.target.value)
									}
									value={email}
									className="form-control font2"
									id="email"
									required />
							</div>

							<div className="mb-3">
								<div className="forgotpass">
									<label htmlFor="password" className="form-label font2">
										รหัสผ่าน
									</label>
									<span data-bs-toggle="modal" data-bs-target="#modalforgot">
										ลืมรหัสผ่าน?
									</span>
								</div>
								<input type="password"
									onChange={
										(e) => setPassword(e.target.value)
									}
									value={password}
									className="form-control"
									id="password"
									required />
							</div>
							<div className="mb-1">
								<span className="text-danger h6">
									{error}</span>
							</div>
							<Button variant="primary" className="font2" type="submit"
								disabled={loading}>
								{
									loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"
								}
								{" "} </Button>

							<div className="or">
								<span></span>
								<small>Or log in with</small>
								<span></span>
							</div>

							<div className="link">
								<a href="#" className="btn btn-secondary">
									<CustomImage src="/googleee.svg" alt="googleee"
										style={
											{
												height: "auto"
											}
										} />
									<span>Facebook</span>
								</a>
								<a href="#" className="btn btn-secondary">
									<CustomImage src="/faceeee.svg" alt="faceeee"
										style={
											{
												height: "auto"
											}
										} />
									<span>Google</span>
								</a>
							</div>

							<div className="line"></div>

							<div className="regis">
								<span className="text-secondary">ยังไม่เคยใช้บริการ ?</span>
								<Link href="#"
									onClick={
										(e) => {
											e.preventDefault();
											setRegisterOpen(true)
											handleLogin()
										}
									}
									className="text-primary">
									สมัครที่นี่
								</Link>
							</div>
						</form>
					</div>
				</div>
			</Modal>

			<Modal className="modallogin" show={registerOpen} id="modalregister"
				onHide={
					() => {
						setRegisterOpen(false)
					}
				} size="lg" centered>
				<p className="title">สนใจลงทะเบียนเป็น</p>
				<div className="row">
					<div className="col-lg-6">
						<div className="card">
							<div className="text-center">
								<CustomImage src="/deal.png" alt="deal" style={{ height: "auto" }} />
							</div>

							<div className="form-check">
								<FaCheckSquare className="form-check-input" />
								<label className="form-check-label">
									ราคารับขายฝากสูงสุดถึง 70%
								</label>
							</div>
							<div className="form-check">
								<FaCheckSquare className="form-check-input" />
								<label className="form-check-label">
									อัตราผลตอบแทนสูง 9-12% ต่อป
								</label>
							</div>
							<div className="form-check ms">
								<FaCheckSquare className="form-check-input" />
								<label className="form-check-label">
									ลดภาระดอกเบี้ยขายฝาก 0.75% /เดือน
								</label>
							</div>

							<div className="text-center">
								<Link href="/register-consignment" onClick={()=>setRegisterOpen(false)}  className="btn btn-primary">ผู้ขายฝาก</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="card">
							<div className="text-center">
								<CustomImage src="/homecare.png" alt="homecare" style={{ height: "auto" }} />
							</div>
							<div className="form-check">
								<FaCheckSquare className="form-check-input" />
								<label className="form-check-label">
									
									อัตราผลตอบแทนสูง 9-12% ต่อปี
								</label>
							</div>
							<div className="form-check">
								<FaCheckSquare className="form-check-input" />
								<label className="form-check-label">
									
									อสังหาริมทรัพย์มูลค่าสูงค้ำประกัน
								</label>
							</div>
							<div className="form-check">
								<FaCheckSquare className="form-check-input" />
								<label className="form-check-label">
									
									ประเมินทรัพย์สินโดยบริษัทประเมิน
									ที่ได้รับความเห็นชอบจาก ก.ล.ต.
								</label>

								<div className="text-center">
									<Link href="/register-investment" onClick={()=>setRegisterOpen(false)} className="btn btn-primary">นักลงทุน</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>

		</>


	);
}

export default Login;
