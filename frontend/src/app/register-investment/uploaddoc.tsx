import CustomImage from "@components/CustomImage"

function UploadDoc() {
	return (
		<>
			<p>สมุดบัญชี<span className="text-require">*</span>
			</p>
			<div className="upload-btn-group">
				<button type="submit" className="btn btn-light csbtn1"><CustomImage src="/upload.svg" alt="upload"
						style={
							{height: "auto"}
						}/>อัพโหลด</button>
			</div>

			<p>เอกสารของผู้ที่จะได้รับผลประโยชน์ (สำเนาบัตรประชาชน)<span className="text-require">*</span>
			</p>
			<div className="upload-btn-group">
				<button type="submit" className="btn btn-light csbtn1"><CustomImage src="/upload.svg" alt="upload"
						style={
							{height: "auto"}
						}/>อัพโหลด</button>
			</div>
		</>
	)
}
export default UploadDoc
