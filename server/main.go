package main

import (
	"server/core"
	"server/global"
	"server/initialize"
)

func main() {
	global.Config = core.Config()
	global.DB = initialize.GormPgSql()

	if global.DB != nil {
		initialize.RegisterTables(global.DB)
		db, _ := global.DB.DB()
		defer db.Close()
	}
	core.RunServer()
}
