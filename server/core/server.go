package core

import (
	"net/http"
	"server/initialize"
	"time"
)

func RunServer() {
	s := http.Server{
		Addr:              ":8182",
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
