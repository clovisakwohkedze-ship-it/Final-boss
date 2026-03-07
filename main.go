package main

import (
	"fmt"
	"net/http"
	"os"
	"time"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" { port = "10000" }

	// 🛡️ Stealth Heartbeat: Prevents Free Tier Sleep
	go func() {
		for {
			time.Sleep(10 * time.Minute)
			http.Get("https://final-boss-ohhn.onrender.com") 
		}
	}()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/html")
		fmt.Fprintf(w, "<html><body style='background:#000;color:#0f0;font-family:monospace;padding:50px;'>")
		fmt.Fprintf(w, "<h1>NCT GLOBAL ASSET TERMINAL</h1>")
		fmt.Fprintf(w, "<p>STATUS: [SECURE_ENCRYPTED]</p>")
		fmt.Fprintf(w, "<p>VERSION: 1.0.4 - HYBRID VIRTUAL SECURITY ACTIVE</p>")
		fmt.Fprintf(w, "<hr><p>Waiting for authorized transaction packet...</p></body></html>")
	})

	http.ListenAndServe(":"+port, nil)
}
