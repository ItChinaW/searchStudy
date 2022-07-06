package initialize

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
	"server/global"
	"server/model"
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

func RegisterTables(db *gorm.DB) {
	err := db.AutoMigrate(
		model.Projects{},
	)
	if err != nil {
		log.Fatal("register table failed", err)
		os.Exit(0)
	}
	log.Print("register table success")
}
