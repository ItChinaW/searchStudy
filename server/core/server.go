package core

import (
	"fmt"
	"net/http"
	"server/global"
	"server/initialize"
	"time"
)

func RunServer() {
	s := http.Server{
		Addr:              fmt.Sprintf("%s %s", ":", global.Config.System.Port),
		Handler:           initialize.Routers(),
		ReadHeaderTimeout: 20 * time.Second,
		WriteTimeout:      20 * time.Second,
		MaxHeaderBytes:    1 << 20,
	}
	err := s.ListenAndServe()
	if err != nil {
		return
	}
}
