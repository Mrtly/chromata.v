### Chromata

<div style="height:60px; width:60px; background-color:red; opacity:75%; display: inline-block;"></div><div style="height:60px; width:60px; background-color:green; opacity:75%; display: inline-block; margin: 0 5px 0 5px;"></div><div style="height:60px; width:60px; background-color:blue; opacity:75%; display: inline-block;"></div>

A fun little color project with thecolorapi.com, using the enpoints for <code>/id</code> and <code>/scheme</code>.

> "Chromata" is Greek for "colors"

<br/>

#### visit [chromata.vercel.app](https://chromata.vercel.app/)

<br/>

or run it locally, after installing dependencies: 

`npm run dev` or `yarn dev`

<hr/>

##### stack

- Vue 3 on Vite, with vue-router
- JavaScript & Tailwind CSS

##### features

-  **Rainbow palette** 
Create a rainbow palette of colors spanning across the color circle.

- **Color scheme palette**
Create color schemes and experiment with various HSL values.

<hr/>

###### design thoughts

- I made 2 different palette generators (rainbow & scheme) in exploration of both endpoints available from thecolorapi (/id & /scheme).
- The colors are deduplicated by color name to reduce the number of tiles rendered for a palette, as the full results from the API quite often contain multiple variations of the same color that are indistinguishable to the eye.
- API calls & palette calculation happens when clicking the 'Generate' button.
- UX: the inputs and button are disabled while results are being calculated, and a loading spinner shows in place of the palette until it is ready. This communicates to the user that the request is received and in progress, and does not allow the user to send another request until the current one is complete.
- Some basic error handling during the API calls ensures the user will get feedback regardless of success or failure (the palette or an error message).