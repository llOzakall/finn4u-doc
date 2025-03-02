import Banner from "@components/Banner"
import CustomImage from "@components/CustomImage"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

function page() {
	return (
		<main>
			<div className="justify-content-center">
				<Banner />
			</div>
			<div className="ragister-content">
				<div className="container">
					<h4>
						ขายฝากได้ง่ายกับ&nbsp;
						<span className="text-primary h2">
							Finn4U
						</span>
					</h4>

					<div className="row">
						<div className="col-lg-4">
							<div className="group">
								<CustomImage src="/menuregis1.png" alt="menuregis1" />
								<p>Finn กับการลดภาระดอกเบี้ย</p>
								<p>ลดภาระดอกเบี้ยขายฝากที่สูง</p>
								<p>เหลือเพียง 0.75% ต่อเดือน</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="group">
								<CustomImage src="/menuregis2.png" alt="menuregis2" />
								<p>Finn กับราคารับฝากขาย</p>
								<p>ราคารับขายฝากสูงสุดถึง 70%</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="group">
								<CustomImage src="/menuregis3.png" alt="menuregis3" />
								<p>Finn เพราะปลอดภัย</p>
								<p>เพราะเรารักษาข้อมูลของคุณ</p>
								<p>เป็นความลับสูงสุด</p>
							</div>
						</div>
					</div>

					<div className="btn-wrap">
						<Link className="btn btn-primary"
							href="/register-consignment">ลงทะเบียนเป็น ผู้ขายฝาก</Link>
					</div>
				</div>
			</div>

			<div className="ragister-content content2">
				<div className="container">
					<h4>
						ลงทุนกับ&nbsp;
						<span className="text-primary h2">Finn4U</span>
					</h4>

					<div className="row">
						<div className="col-lg-4">
							<div className="group">
								<CustomImage src="/menuregis4.png" alt="menuregis4" />
								<p>Finn มีอสังหาฯมูลค่าสูง</p>
								<p>อสังหาริมทรัพย์มูลค่าสูงค้ำประกัน</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="group">
								<CustomImage src="/menuregis5.png" alt="menuregis5" />
								<p>Finn กับอัตราตอบแทน</p>
								<p>ด้วยอัตราผลตอบแทนสูง 9-12% ต่อปี</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="group">
								<CustomImage src="/menuregis6.png" alt="menuregis6" />
								<p>Finn หายห่วง</p>
								<p>ประเมินทรัพย์สินโดยบริษัทประเมิน</p>
								<p>ที่ได้รับความเห็นชอบจาก ก.ล.ต.</p>
							</div>
						</div>
					</div>

					<div className="btn-wrap">
						<Link className="btn btn-primary" href="/register-investment">ลงทะเบียนเป็น นักลงทุน</Link>
					</div>
				</div>
			</div>

			<div className="invest">
				<div className="container">
					<p className="title-content font2">สินทรัพย์ขายฝากแนะนำ</p>

					<div className="row land-sale">
						{
							[...Array(15)].map((_, i) => (
								<div className="col-lg-4 mb-"
									key={i}>
									<div className="card">
										<div className="head">
											<div className="not-hover">
												<CustomImage src="/map1.png" alt="map1" />

												<span className="badge bg-primary font2">ที่ดินเปล่า</span>
											</div>
											<div className="hover">
												<div className="d-none">
													<div className="wrap">
														<a href="" className="btn btn-primary  font2">ลงทุน</a>
														<a href="" className="btn btn-white  font2">ข้อมูลเพิ่มเติม</a>
														<div className="view-eye">
															<i className="fa-solid fa-eye fs-1"></i>
															<span>123</span>
														</div>
													</div>
												</div>
											</div>

										</div>
										<div className="card-body">
											<div className="list">
												<FontAwesomeIcon icon={faCheck}
													className="fs-4" />
												<span className="font2">ลาดกระบัง,กรุงเทพมหานคร</span>

											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck}
													className="fs-4" />
												<span className="font2">เลขที่ประกาศขาย 000023</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck}
													className="fs-4" />
												<span className="font2">0 ไร่ 0 งาน 20
													ตารางวา</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck}
													className="fs-4" />
												<span className="font2">มูลค่าสินทรัพย์ค้ำประกัน</span>
												<span className="text-primary font2">3.2
													ล้านบาท</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck}
													className="fs-4" />
												<span className="font2">ราคาขายฝาก
													<span className="text-primary font2">1,450,000</span>
													บาท</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck}
													className="fs-4" />
												<span className="font2">11 เมษายน
													2565</span>
											</div>
										</div>
									</div>
								</div>
							))
						}

						{
							[...Array(15)].map((_, i) => (
								<div className="col-lg-4 mb-"
									key={i}>
									<div className="card sold">
										<div className="head">
											<div className="not-hover">
												<CustomImage src="/map1.png" alt="map1" />

												<span className="badge btn-grey font2">ที่ดินเปล่า</span>
												<span className="btn btn-danger">Sold</span>
											</div>
											<div className="hover">
												<div className="d-none">
													<div className="wrap">
														<a href="" className="btn btn-grey  font2">ลงทุน</a>
														<a href="" className="btn btn-white  font2">ข้อมูลเพิ่มเติม</a>
														<div className="view-eye">
															<i className="fa-solid fa-eye fs-1"></i>
															<span>123</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="card-body">
											<div className="list">
												<FontAwesomeIcon icon={faCheck} />
												<span className="font2">ลาดกระบัง,
													กรุงเทพมหานคร</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck} />
												<span className="font2">เลขที่ประกาศขาย
													000023</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck} />
												<span className="font2">0 ไร่ 0 งาน 20
													ตารางวา</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck} />
												<span className="font2">มูลค่าสินทรัพย์ค้ำประกัน</span>
												<span className="text-primary font2">3.2
													ล้านบาท</span>
											</div>
											<div className="list">
												<FontAwesomeIcon icon={faCheck} />
												<span className="font2">ราคาขายฝาก
													<span className="text-primary font2">1,450,000</span>
													บาท</span>
											</div>
										</div>
									</div>
								</div>
							))
						} </div>
				</div>
			</div>
			<div className="about-fin4u">
				<div className="container">
					<p className="title-content font2">เกี่ยวกับ Finn4U</p>

					<div className="wrap">
						<div className="row">
							<div className="col-lg-6">
								<CustomImage src="/video1.png" alt="video1" />

								<button className="btn btn-primary w-100 rounded-0">PLAY VIDEO</button>
							</div>
							<div className="col-lg-6">
								<CustomImage src="/aboutfin2.png" alt="aboutfin2" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="story">
				<div className="container">
					<p className="title-content font2">เรื่องราวที่ผู้ใช้ไว้วางใจบริการ Finn4U</p>
					<div className="row justify-content-between">
						<div className="col-lg-3">
							<div className="card">
								<div className="user">
									<CustomImage src="/user1.png" className="w-50" alt="user1" />
								</div>
								<p className="name font2">พีทส์</p>
								<p className="position font2">พีทส์</p>
								<p className="detail">“Finn4U คือแพลตฟอร์ม Fintech ที่ทำให้เกิดประโยชน์กับคนหลายๆฝ่าย”</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="card">
								<div className="user">
									<CustomImage src="/user2.png" className="w-50" alt="user2" />
								</div>
								<p className="name font2">วัตสัน</p>
								<p className="position font2">นักลงทุน</p>
								<p className="detail">“เป็นแพลตฟอร์มที่สามารถตอบโจทย์ได้ดี
									เพราะทำให้ผู้คนทั่วไปสามารถเข้าถึงแหล่งเงินทุนได้”</p>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="card">
								<div className="user">
									<CustomImage src="/user3.png" className="w-50" alt="user3" />
								</div>
								<p className="name font2">เทเลอร์</p>
								<p className="position font2">ผู้ขายฝาก</p>
								<p className="detail">“ไม่คิดว่าจะได้ที่ดินกลับคืนมา ดีใจมากๆ เลยค่ะ ถ้าเราไม่เจอ
									ไม่คิดว่าจะมีวันนี้เลยด้วยซ้ำ”</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="tips">
				<div className="container  fintips-detail">
					<p className="title-content ">Finn Tips เคล็ดลับเรื่องอสังหาฯ</p>
					<div className="row">
						<div className="col-lg-4">
							<div className="card">
								<CustomImage src="/fin-1.png" alt="fin-1" />
								<div className="card-body">
									<div className="date">
										<CustomImage src="/book.svg" alt="book"
											style={
												{
													width: "6%",
													height: "auto"
												}
											} />
										<span>
											12 พ.ค. 2565</span>
									</div>
									<p>อัตราดอกเบี้ยขายฝากที่ดินตามกฎหมาย</p>
									<p>ปกติแล้วในการทำธุรกรรมขายฝากที่ดินนั้นอัตราดอก
										เบี้ยขายฝากที่ดินจะถูกกำหนดไว้ตามกฎหมายโดยใช้
										ข้อบังคับของกฎหมายขายฝากคือพระราชบัญญัติ..</p>
									<a href="#" className="d-flex justify-content-end">อ่านต่อ</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card">
								<CustomImage src="/fin-2.png" alt="fin-2" />
								<div className="card-body">
									<div className="date">
										<CustomImage src="/book.svg" alt="book"
											style={
												{
													width: "6%",
													height: "auto"
												}
											} />
										<span>
											12 พ.ค. 2565</span>
									</div>
									<p>อัตราดอกเบี้ยขายฝากที่ดินตามกฎหมาย</p>
									<p>ปกติแล้วในการทำธุรกรรมขายฝากที่ดินนั้นอัตราดอก
										เบี้ยขายฝากที่ดินจะถูกกำหนดไว้ตามกฎหมายโดยใช้
										ข้อบังคับของกฎหมายขายฝากคือพระราชบัญญัติ..</p>
									<a href="#" className="d-flex justify-content-end">อ่านต่อ</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card">
								<CustomImage src="/fin-3.png" alt="fin-3" />
								<div className="card-body">
									<div className="date">
										<CustomImage src="/book.svg" alt="book"
											style={
												{
													width: "6%",
													height: "auto"
												}
											} />
										<span>
											12 พ.ค. 2565</span>
									</div>
									<p>อัตราดอกเบี้ยขายฝากที่ดินตามกฎหมาย</p>
									<p>ปกติแล้วในการทำธุรกรรมขายฝากที่ดินนั้นอัตราดอก
										เบี้ยขายฝากที่ดินจะถูกกำหนดไว้ตามกฎหมายโดยใช้
										ข้อบังคับของกฎหมายขายฝากคือพระราชบัญญัติ..</p>
									<a href="#" className="d-flex justify-content-end">อ่านต่อ</a>
								</div>
							</div>
						</div>
					</div>

					<a href="" className="btn btn-primary see-all">ดูทั้งหมด</a>
				</div>
			</div>
		</main>
	)
}
export default page