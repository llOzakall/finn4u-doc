package models

import (
	"fmt"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/phongsakk/finn4u-back/types"
	"gorm.io/gorm"
)

func (User) TableName() string {
	return "user"
}

type User struct {
	gorm.Model
	UserRoleID    int64  `json:"id" gorm:"not null"`
	Email         string `json:"email" gorm:"size:255;not null;unique"`
	Password      string `json:"-" gorm:"size:255"`
	Provider      string `json:"provider" gorm:"size:126;default:password" validate:"oneof:password facebook email"`
	ProviderToken string `json:"-" gorm:"size:255"`
	Verified      bool   `json:"verified" gorm:"default:false"`
}

var secretKeyAccess = []byte("finn4u-secret-access")
var secretKeyRefresh = []byte("finn4u-secret-refresh")

// creates a new access token for a user
func (user *User) GenerateAccessToken() (string, error) {
	claims := types.Auth{
		UserId: user.ID,
		Email:  user.Email,
		Exp:    time.Now().Add(time.Minute * 5).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(secretKeyAccess)
	if err != nil {
		return "", err
	}
	return tokenString, nil
}

// Validate and parse the JWT token
func (user *User) ParseAccessToken(tokenString string) (*jwt.Token, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return secretKeyAccess, nil
	})
	if err != nil {
		return nil, err
	}
	return token, nil
}

func (user *User) ParseRefreshToken(tokenString string) (*jwt.Token, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return secretKeyAccess, nil
	})
	if err != nil {
		return nil, err
	}
	return token, nil
}

func (user *User) GenerateRefreshToken() (string, error) {
	claims := jwt.MapClaims{
		"user_id": user.ID,
		"email":   user.Email,
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString(secretKeyRefresh)
	if err != nil {
		return "", err
	}
	return tokenString, nil
}
