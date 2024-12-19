package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/tools/go/types/objectpath"
)

type cord struct{
	startx int
	starty int
	endx int
	endy int 
}

type pos struct{
	x int
	y int
}

func main(){
	app:= fiber.New()

	app.Post("/find-path", findpath)

	log.Fatal(app.Listen(":4000"))
}

func findpath (c *fiber.Ctx) error{
	 cordinates:= &cord
	 cordinates=c.BodyParser()
	
		i:=cordinates.startx
		j:=cordinates.starty
	var rescord [] objectpath
	respos:= &pos
	idx:=0
	 for {
		if(i<ending.x&& j<ending.y){
			i++;
			respos.x=i
			respos.y=j
			rescord[idx]=respos
			idx++
		}else{
			j++
			respos.x=i
			respos.y=j
			rescord[idx]=respos
			idx++
		}
	 }

return c.Status(200).JSON(respos)
}