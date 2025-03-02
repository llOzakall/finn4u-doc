import CustomImage from "../../components/CustomImage"

function VerifyIdcard() {
	return (
		<div className="insert-id-card">
			<div className="idcard">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<CustomImage src="/id-card.png" alt="id-card"/>
					</div>
					<div className="col-lg-6">
						<ul>
							<li className="font2">วันหมดอายุของบัตรต้องมากกว่า 6 เดือน</li>
							<li className="font2">ถ่ายรูปหน้าบัตร</li>
							<li className="font2">ถ่ายรูปหลังบัตร</li>
							<li className="font2">ถ่ายรูปเซลฟี่ผู้ขายฝากคู่กับบัตรประชาชน</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="import">
				<p className="font2">1. ถ่ายรูปหน้าบัตร</p>
				<div className="d-flex">
					<button type="submit" className="btn btn-primary font2">
						<CustomImage src="/camera.svg" alt="camera"
							style={
								{width: "25%"}
							}/>
						ถ่ายภาพ</button>
					<button type="submit" className="btn btn-light font2">
						<CustomImage src="/upload.svg" alt="upload"
							style={
								{width: "25%"}
							}/>
						อัพโหลด</button>
				</div>
				<p className="font2">2. ถ่ายรูปหลังบัตร</p>
				<div className="d-flex">
					<button type="submit" className="btn btn-primary">
						<CustomImage src="/camera.svg" alt="camera"
							style={
								{width: "25%"}
							}/>
						ถ่ายภาพ</button>
					<button type="submit" className="btn btn-light">
						<CustomImage src="/upload.svg" alt="upload"
							style={
								{width: "25%"}
							}/>
						อัพโหลด</button>
				</div>
				<p className="font2">3. ถ่ายรูปเซลฟี่ผู้ขายฝากคู่กับบัตรประชาชน</p>
				<div className="d-flex">
					<button type="submit" className="btn btn-primary font2">
						<CustomImage src="/camera.svg" alt="camera"
							style={
								{width: "25%"}
							}/>
						ถ่ายภาพ</button>
					<button type="submit" className="btn btn-light font2">
						<CustomImage src="/upload.svg" alt="upload"
							style={
								{width: "25%"}
							}/>
						อัพโหลด</button>
				</div>
			</div>
		</div>
	)
}
export default VerifyIdcard
