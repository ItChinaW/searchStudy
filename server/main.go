package main

import (
	"server/core"
	"server/global"
	"server/initialize"
)

func main() {
	global.Config = core.Config()
	global.DB = initialize.GormPgSql()

	core.RunServer()
}
