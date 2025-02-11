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
		auth.POST("/verify-token", con.VerifyToken)
		auth.POST("/register", con.Register)
		auth.POST("/forgot-password", con.ForgotPassword)
		auth.POST("/reset-password", con.ResetPassword)
	}
}
