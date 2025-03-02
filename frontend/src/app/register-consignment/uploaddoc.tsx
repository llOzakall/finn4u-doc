import {Button} from "react-bootstrap"
import CustomImage from "../../components/CustomImage"

function UploadDoc() {
	return (
		<>
			<div className="row mb-3">
				<div className="col-lg-6">
					<div className="mb-3">
						<label className="form-label font2">จังหวัดที่ตั้งทรัพย์สิน<span className="text-require font2">*</span>
						</label>
						<select id="Select3_1" className="form-select font2">
							<option>select</option>
						</select>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="mb-3">
						<label className="form-label font2">อำเภอ/เขต<span className="text-require font2">*</span>
						</label>
						<select id="Select3_2" className="form-select font2">
							<option>select</option>
						</select>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="mb-3">
						<label className="form-label font2">ประเภททรัพย์สิน<span className="text-require font2">*</span>
						</label>
						<select id="Select3_3" className="form-select font2">
							<option>select</option>
						</select>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="mb-3">
						<label className="form-label font2">ขนาดพื้นที่ทรัพย์สิน<span className="text-require font2">*</span>
						</label>
						<input type="text" className="form-control" id="form1" aria-describedby="text"/></div>
				</div>
				<div className="col-lg-2">
					<div className="mb-3">
						<label className="form-label font2">หน่วยเป็น<span className="text-require font2">*</span>
						</label>
						<select id="Select3_4" className="form-select font2">
							<option>select</option>
						</select>
					</div>
				</div>
			</div>

			<p className="mt-3 font2">กรุณาอัพโหลดโฉนดที่ดิน(ด้านหน้าและด้านหลังของโฉนดที่ดิน)<span className="text-require font2">*</span>
			</p>
			<div className="upload-btn-group">
				<div className="group">
					<span className="text-primary">ภาพด้านหน้าโฉนดที่ดิน</span>
					<Button variant="primary">
						<CustomImage src="/upload-white.svg" alt="upload-white"
							style={
								{width: "30%"}
							}/>
						อัพโหลด
					</Button>
				</div>
				<div className="group">
					<span className="text-primary">ภาพด้านหน้าโฉนดที่ดิน</span>
					<Button variant="primary">
						<CustomImage src="/upload-white.svg" alt="upload-white"
							style={
								{width: "30%"}
							}/>
						อัพโหลด</Button>
				</div>

			</div>

			<p className="font2">กรุณาอัพโหลดรูปภาพทรัพย์สิน (อย่างน้อย 3 รูป)<span className="text-require font2">*</span>
			</p>

			<div className="upload-btn-group">
				<Button className="csbtn1" variant="light">
					<CustomImage src="/upload.svg" alt="upload"/>
					อัพโหลด
				</Button>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<label className="form-label font2">Location on Google Maps<span className="text-require font2">*</span>
					</label>
					<input type="text" className="form-control" id="form1" aria-describedby="text" placeholder="Location on Google Maps"/></div>
			</div>

			<div className="mb-3 mt-5 form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
				<label className="form-check-label font2">มีผู้ถือกรรมสิทธิ์มากกว่า 1 คน</label>
			</div>
		</>
	)
}
export default UploadDoc
