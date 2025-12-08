# DXC Task - Vending machine

## Instalation

- server
  1.navigate to `be` folder
  2.run npm install
- ui
  1.navigate to `fe\dxc-vending-machine` folder
  2.run npm install

## To start

- server - run in `be` command `npm run dev`
- ui - run in `fe\dxc-vending-machine` command `npm start`
- open browser `http://localhost:4200/home`

## UI and navigation

- clicking on the vending icon should lead you to the landing screen of the app
- clicking on `See inventory` - to the inventory of items
- once you select the desired item with quantity the checkout cart is filled out `(top right corner icon chip)`
- from there click on `checkout button` for the next screen for reviewing your order
- from there one more `checkout to the payment keylock`
- there are some simple popup toasts for payment indication
- if payment is successful the change information calculated from the vending machine is "returned" under the keylock

NOTE: couldn't figure out a more friendly UI for accepting change so that part should be discussed further witha BA
