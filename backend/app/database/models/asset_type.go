package models

import (
	"github.com/phongsakk/finn4u-back/app/database/models/skeletons"
)

func (AssetType) TableName() string {
	return "asset_type"
}

type AssetType struct {
	skeletons.Model
	skeletons.NameMultiLanguage
}
