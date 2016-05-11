flipcard
  div.cardwrap(class="{flipx:flipx,flipy:flipy,backflip:backflip,back45:back45}")
    <yield />
     
  style(type="text/stylus").
    
    flipcard
      display block
      position relative
      perspective 500px
      transform-origin: center

      .cardwrap
        transition 0.5s
        transform-style: preserve-3d
        position relative
        
      .flipx
        transform: rotateY(180deg)
      
      .flipy
        transform: rotateX(180deg)
      
      .flipy.flipx
        transform rotate3d(-45,-45,0,180deg)
      
      .back45 .back
          transform rotate3d(45,45,0,180deg)
 
       .backflip .back
          transform rotate3d(180,0,0,180deg)
        
      .front,.back
        background white
        position absolute
        box-sizing border-box
        padding 10px
        backface-visibility hidden
        box-shadow 0 5px 15px rgba(0,0,0,0.2)
    
      .front
        transform rotateY(0deg)
      
      .back
        transform rotateY(180deg)
        background #444
        color white
  
  script(type="coffee").
    
    @flipx = false
    @flipy = false
    
    @on 'mount',->
      @root.style.width = "100px"  if !@root.style.width
      @root.style.height = "100px"  if !@root.style.height
      @root.style.display = "block"
      @back45 = true if opts.direction?.match(/[xy]{2}/)
      @backflip = true if opts.direction == "y"
      [].slice.call(@root.querySelectorAll('.front,.back,.cardwrap')).forEach (elem)=>
        elem.style.width = @root.offsetWidth+"px"
        elem.style.height = @root.offsetHeight+"px"
      @update()
        
    @toggle = =>
      @flipx = !@flipx if opts.direction!="y" || opts.direction?.match(/x/)
      @flipy = !@flipy if opts.direction?.match(/y/)
      @update()