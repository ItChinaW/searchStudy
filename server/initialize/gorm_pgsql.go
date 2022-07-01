package initialize

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"server/global"
)

func GormPgSql() *gorm.DB {
	dsn := "host=" + global.Config.Postgres.Host + " user=" + global.Config.Postgres.User + " password=" + global.Config.Postgres.Password +
		" dbname=" + global.Config.Postgres.Dbname + " port=" + global.Config.Postgres.Port + " sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil
	}
	return db
}
