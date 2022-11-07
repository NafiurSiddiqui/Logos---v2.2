# CUSTOM NEON TEXT APP (version 2.2)

Turn your text into a custom neon light and lit up your place with neon induced aura! This App can be used by people who runs business of building custom neon signboard, nameplate and such. This app is also highly modifiable according to the client's need.
v2 codwise was not opitmum since it was just made with props drilling which is taken care of with the release of  v2.1 and v2.2.
V2.2 release is going to address the issue of poor UX on smaller device.

Vist: [Client website](...)
Vist: [v2.2 website](...)

## Note for developer and clients

Plz _beware_ of the licensing issue for the custom fonts.
Check out the links below for the licensing of the fonts used here that requires licensing for commercial use.

- [Amsterdam](https://www.cdnfonts.com/amsterdam-2.font)

- [Amanda](https://www.cdnfonts.com/amanda.font)

### features -

- Type your text <= 20 character
- Choose from the range of 8 google fonts
- set the color between 12 unique colors
- Pricing is based on the characters, so basically the width.
- a switch to turn the neon and off
- shows off the dimension of the text
- of course all of these are modifiable according to your business requirements.

## :bug: BUGS from v1

---

- unpredictable behaviour for the computed style of the height, needs double clicking to render the accurate size.

## Solution to bugs

---

Fixed.

### Some of the technical aspect i have implemented in this version of the webApp (almost)

---
- React 

- React Router

- Redux/ Redux toolkit

- SASS.

- webpack

- NPM

- Debouncing algorithm -- to save resources and time therefore good optimization and speed. ( i have a custom debounce hook here which is not used here but left for reference for next updates)

- One of the most trickiest and challenging part was to get the height of each characters, which i did with the help of masking a canvas.

- Dynamic calculation of price and dimensions.

- Dynamic mapping of colors to set the neon color

- Allows user to select between given fonts and render accurate data.

- Caching with local storage to reassure user gets the text, dimension, price where they left in case they close or refresh the tab.

- Algortihtm for checking local storage availibility

- Responsiveness ensured which adapts to all of the devices out there.


#Instruction

- clone the rep
- delete package.json
- run -> npm install 
- once done, simply run -> npm start

- you need to refresh if you are resizing the browser for live responsiveness in order to see the changes

## file naming convention

- UI = User Interface (e.g. navbar === UI)
