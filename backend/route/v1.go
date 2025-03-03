package route

import (
	"github.com/gin-gonic/gin"
	con "github.com/phongsakk/finn4u-back/app/controller"
)

func V1(r *gin.RouterGroup) {
	r.GET("/", con.HealthCheck)

	auth := r.Group("/auth")
	{
		auth.POST("/login", con.Login)
		auth.POST("/signin", con.Login)
		auth.POST("/checkin", con.Login)
		auth.POST("/connect", con.Connect) // เข้าใช้งาน admin

		auth.POST("/refresh-token", con.RefreshToken)
		auth.POST("/verify-token", con.VerifyToken)

		auth.POST("/register", con.Register) // ลงทะเบียนผู้ใช้งานทั่วไป
		auth.POST("/signup", con.Signup)     // ลงทะเบียนผู้ขายฝาก/ฝากขาย
		auth.POST("/enroll", con.Enroll)     // ลงทะเบียนผู้ลงทุน

		auth.POST("/forgot-password", con.ForgotPassword)
		auth.POST("/reset-password", con.ResetPassword)
	}

	asset := r.Group("/asset")
	{
		asset.GET("/", con.GetAsset)
		asset.POST("/", con.CreateAsset)
	}

	master := r.Group("/master")
	{
		master.GET("/province", con.GetMasterProvince)
		master.GET("/district", con.GetMasterDistrict)
		master.GET("/sub-district", con.GetMasterSubDistrict)
		master.GET("/asset-type", con.GetMasterAssetType)
	}
}
