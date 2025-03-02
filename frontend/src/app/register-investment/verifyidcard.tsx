import CustomImage from "@components/CustomImage"

function Verifyidcard() {
	return (
		<div className="insert-id-card">
			<div className="idcard">
				<div className="row align-items-center">
					<div className="col-lg-6"><CustomImage src="/id-card.png" alt="id-card"/></div>
					<div className="col-lg-6">
						<ul>
							<li>วันหมดอายุของบัตรต้องมากกว่า 6 เดือน</li>
							<li>ถ่ายรูปหน้าบัตร</li>
							<li>ถ่ายรูปหลังบัตร</li>
							<li>ถ่ายรูปเซลฟี่ผู้ขายฝากคู่กับบัตรประชาชน</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="import">
				<p>1. ถ่ายรูปหน้าบัตร</p>
				<div className="d-flex">
					<button type="submit" className="btn btn-primary"><CustomImage src="/camera.svg" alt="camera"
							style={
								{height: "auto"}
							}/>ถ่ายภาพ</button>
					<button type="submit" className="btn btn-light"><CustomImage src="/upload.svg" alt="upload"
							style={
								{height: "auto"}
							}/>อัพโหลด</button>
				</div>
				<p>2. ถ่ายรูปหลังบัตร</p>
				<div className="d-flex">
					<button type="submit" className="btn btn-primary"><CustomImage src="/camera.svg" alt="camera"
							style={
								{height: "auto"}
							}/>ถ่ายภาพ</button>
					<button type="submit" className="btn btn-light"><CustomImage src="/upload.svg" alt="upload"
							style={
								{height: "auto"}
							}/>อัพโหลด</button>
				</div>
				<p>3. ถ่ายรูปเซลฟี่ผู้ขายฝากคู่กับบัตรประชาชน</p>
				<div className="d-flex">
					<button type="submit" className="btn btn-primary"><CustomImage src="/camera.svg" alt="camera"
							style={
								{height: "auto"}
							}/>ถ่ายภาพ</button>
					<button type="submit" className="btn btn-light"><CustomImage src="/upload.svg" alt="upload"
							style={
								{height: "auto"}
							}/>อัพโหลด</button>
				</div>
			</div>
		</div>
	)
}
export default Verifyidcard
