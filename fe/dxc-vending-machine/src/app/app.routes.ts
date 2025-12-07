import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { VendingMachineInventory } from './pages/vending-machine-inventory/vending-machine-inventory';
import { Checkout } from './pages/checkout/checkout';
import { Payment } from './pages/payment/payment';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'inventory',
        component: VendingMachineInventory,
      },
      {
        path: 'checkout',
        component: Checkout,
      },
      {
        path: 'payment',
        component: Payment,
      },
    ],
  },
];
