package global

import (
	"gorm.io/gorm"
	"server/config"
)

var (
	DB     *gorm.DB
	Config config.Server
)
