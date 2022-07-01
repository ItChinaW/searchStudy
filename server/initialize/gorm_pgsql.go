package initialize

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func GormPgSql() *gorm.DB {
	dsn := "host=localhost user=postgres password=wwwpg88com dbname=postgres port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil
	}
	return db
}
