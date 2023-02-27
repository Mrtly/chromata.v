## Chromata

<div style="height:60px; width:60px; background-color:red; opacity:75%; display: inline-block;"></div><div style="height:60px; width:60px; background-color:green; opacity:75%; display: inline-block; margin: 0 5px 0 5px;"></div><div style="height:60px; width:60px; background-color:blue; opacity:75%; display: inline-block;"></div>

A fun little color project with [thecolorapi](https://www.thecolorapi.com/), using the endpoints for <code>/id</code> and <code>/scheme</code>.

> "Chromata" is Greek for "colors"

<br/>

### visit [chromata.vercel.app](https://chromata.vercel.app/)

<br/>

or run it locally, after installing dependencies: 

`npm run dev` or `yarn dev`

<hr/>

#### features

-  **Rainbow palette** 
Create a rainbow palette of colors spanning across the color circle.

- **Color scheme palette**
Create color schemes and experiment with various HSL values.

#### screenshots

<img height="320" alt="Screen Shot 2023-02-27 at 9 29 37 AM" src="https://user-images.githubusercontent.com/50080618/221592313-27d9bda5-91f6-46b0-8ccd-0e54025538a2.png">  <img height="270" alt="Screen Shot 2023-02-27 at 9 30 40 AM" src="https://user-images.githubusercontent.com/50080618/221592308-da9f1500-7336-425c-8df4-8ae4920d9eb2.png">

<img height="320" alt="Screen Shot 2023-02-27 at 9 29 46 AM" src="https://user-images.githubusercontent.com/50080618/221592311-6d19ba12-36ab-4874-89ba-017b83582a8d.png">  <img height="270" alt="Screen Shot 2023-02-27 at 9 30 25 AM" src="https://user-images.githubusercontent.com/50080618/221592309-929e5067-37d3-4039-943a-3a8bd1cbf3cd.png">

#### stack

- Vue 3 on Vite, with vue-router
- JavaScript & Tailwind CSS

<hr/>

###### design thoughts

- I made 2 different palette generators (rainbow & scheme) in exploration of both endpoints available from thecolorapi (/id & /scheme).
- The colors are deduplicated by color name to reduce the number of tiles rendered for a palette, as the full results from the API quite often contain multiple variations of the same color that are indistinguishable to the eye.
- API calls & palette calculation happens when clicking the 'Generate' button.
- UX: the inputs and button are disabled while results are being calculated, and a loading spinner shows in place of the palette until it is ready. This communicates to the user that the request is received and in progress, and does not allow the user to send another request until the current one is complete.
- Some basic error handling during the API calls ensures the user will get feedback regardless of success or failure (the palette or an error message).
