package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/phongsakk/finn4u-back/app/database"
	"github.com/phongsakk/finn4u-back/app/database/models"
	"github.com/phongsakk/finn4u-back/types"
	"github.com/phongsakk/finn4u-back/utils"
)

func Login(c *gin.Context) {
	var request struct {
		Email    string `json:"email" validate:"required,email"`
		Password string `json:"password" validate:"required"`
	}

	if err := c.ShouldBindBodyWithJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, types.Response{
			Code:  http.StatusBadRequest,
			Error: utils.NullableString(err.Error()),
		})
		return
	}
	if err := utils.Validate(&request); err != nil {
		c.JSON(http.StatusBadRequest, types.Response{
			Code:  http.StatusBadRequest,
			Error: utils.NullableString(err.Error()),
		})
		return
	}

	var user models.User
	db, err := database.Conn()
	defer database.Close(db)
	if err != nil {
		c.JSON(http.StatusInternalServerError, types.Response{
			Code:  http.StatusInternalServerError,
			Error: utils.NullableString(err.Error()),
		})
		return
	}
	if err := db.Where("email =?", request.Email).First(&user).Error; err != nil {
		c.JSON(http.StatusNotFound, types.Response{
			Code:  http.StatusInternalServerError,
			Error: utils.NullableString("User not found"),
		})
		return
	}
	if !utils.CheckPasswordHash(request.Password, user.Password) {
		c.JSON(http.StatusUnauthorized, types.Response{
			Code:  http.StatusInternalServerError,
			Error: utils.NullableString("Invalid password"),
		})
		return
	}

	accessToken, errAccess := user.GenerateAccessToken()
	if errAccess != nil {
		c.JSON(http.StatusInternalServerError, types.Response{
			Code:  http.StatusInternalServerError,
			Error: utils.NullableString(errAccess.Error()),
		})
		return
	}
	refreshToken, errRefresh := user.GenerateRefreshToken()
	if errRefresh != nil {
		c.JSON(http.StatusInternalServerError, types.Response{
			Code:  http.StatusInternalServerError,
			Error: utils.NullableString(errRefresh.Error()),
		})
		return
	}
	c.JSON(200, types.Response{
		Status:  true,
		Code:    http.StatusOK,
		Message: utils.NullableString("Logged in successfully"),
		Data: map[string]interface{}{
			"access_token":       accessToken,
			"refresh_token":      refreshToken,
			"access_expires_in":  60 * 5,       // 5 minutes
			"refresh_expires_in": 60 * 60 * 24, // 1 day
		},
	})
}

func RefreshToken(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Refreshed token successfully",
	})
}

func VerifyToken(c *gin.Context) {
	// auth := c.GetHeader("Authorization")
	// if auth == "" {
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Missing authorization header"})
	// 	return
	// }
	// tokenString := auth[len("Bearer "):]
	// token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
	// 	return secretKey, nil
	// })
	// if err != nil {
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
	// 	return
	// }
	// if !token.Valid {
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Token is invalid"})
	// 	return
	// }
}

func Register(c *gin.Context) {

}

func ForgotPassword(c *gin.Context) {

}

func ResetPassword(c *gin.Context) {
	data, err := utils.Hash("123456")
	if err != nil {
		c.JSON(http.StatusInternalServerError, types.Response{
			Status: false,
			Code:   http.StatusInternalServerError,
			Error:  utils.NullableString(err.Error()),
		})
		return
	}
	c.JSON(http.StatusOK, types.Response{
		Code:    http.StatusOK,
		Status:  true,
		Message: utils.NullableString("Password reset successfully"),
		Data:    data,
	})
}
