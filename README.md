# magnetic-buttons
quick, simple native JS script with GSAP that makes buttons gravitate towards the cursor.

requires GSAP

make sure the perimeter element is styled within your button so it bleeds out, e.g    
````
// the area around the button that is hoverable and triggers the magnectic effect
&__perimeter {
  @apply w-[calc(100%+40px)] h-[calc(100%+30px)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0;
}
 ````
